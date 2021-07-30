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
  revision: string
  locale: string
  latestRevisionLocale: string
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

const plugin: Plugin = ({ $content, i18n: { locale, localeCodes }}, inject) => {
  async function fetchDocs(): Promise<Docs> {
    const contentIndex = await $content('docs', 'index').fetch<ContentIndex>() as ContentIndex

    const chapters = await Promise.all(
      contentIndex.chapters.map(async (chapter): Promise<Chapter> => {
        const paths = chapter.pages.map((v) => '/docs/' + v)
        const pathIndex = Object.fromEntries(paths.map((path, i) => [path, i]))
        const pages = (
          await $content('docs', { deep: true })
            .where({ path: { $in: paths.map((v) => [v, locale].join('.')) }})
            .fetch<Page>() as Page[]
        ).map((page) => ({ ...page, path: page.path.split('.')[0], locale }))
        pages.sort((a, b) => pathIndex[a.path] - pathIndex[b.path])

        return {
          title: chapter.title[locale],
          pages,
        }
      }),
    )

    return { chapters }
  }

  async function fetchDoc(path: string): Promise<Page> {
    async function fetchPage(path: string, locale: string) {
      const v = await $content('docs', [path, locale].join('.')).fetch<Page>() as Page
      v.locale = locale
      return v
    }

    const page = await fetchPage(path, locale)
    page.locale = locale
    page.latestRevisionLocale = locale
    let latestRevision = page.revision

    console.log(localeCodes)
    const pages = await Promise.all(localeCodes.map(async (locale) => await fetchPage(path, locale)))
    console.log(page)
    pages.forEach((v) => {
      console.log(v)
      console.log(v.revision > latestRevision)
      if (v.revision > latestRevision) {
        latestRevision = v.revision
        page.latestRevisionLocale = v.locale
      }
    })

    return page
  }

  inject('docs', {
    fetch: async (slug?: string) => slug ? await fetchDoc(slug) : await fetchDocs(),
  })
}

export default plugin
