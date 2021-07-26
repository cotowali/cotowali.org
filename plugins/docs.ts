import { Plugin } from '@nuxt/types'

interface ContentChapter {
  title: { [key: string]: string }
  pages: string[]
}

interface ContentIndex {
  chapters: ContentChapter[]
}

export interface Page {
  title: string
  slug: string
  path: string
  version: string
}

export interface Chapter {
  title: string
  pages: Page[]
}

export interface Docs {
  chapters: Chapter[]
}

interface $Docs {
  fetch: {
    (slug: string): Promise<Page>
      (): Promise<Docs>
  }
}

declare module '@nuxt/types' {
  interface Context {
    $docs: $Docs
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $docs: $Docs
  }
}

const plugin: Plugin = ({ $content, i18n: { locale }}, inject) => {
  async function fetchDocs(): Promise<Docs> {
    const contentIndex = await $content('docs', 'index').fetch<ContentIndex>() as ContentIndex

    const chapters = await Promise.all(
      contentIndex.chapters.map(async (chapter): Promise<Chapter> => {
        const slugs = chapter.pages.map((v) => [v, locale].join('.'))
        const slugIndex = Object.fromEntries(slugs.map((slug, i) => [slug, i]))
        const pages = await $content('docs')
          .where({ slug: { $in: slugs }})
          .fetch<Page>() as Page[]
        return {
          title: chapter.title[locale],
          pages: pages
            .map((page) => ({ ...page, path: page.path.split('.')[0] }))
            .sort((a, b) => slugIndex[a.slug] - slugIndex[b.slug]),
        }
      }),
    )

    return { chapters }
  }

  async function fetchDoc(slug: string): Promise<Page> {
    return await $content('docs', [slug, locale].join('.')).fetch<Page>() as Page
  }

  inject('docs', {
    fetch: async (slug?: string) => slug ? await fetchDoc(slug) : await fetchDocs(),
  })
}

export default plugin
