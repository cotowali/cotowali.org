import { Plugin } from '@nuxt/types'

export interface Index {
  pages: string[]
}

export interface Page {
  title: string
  slug: string
  path: string
}

declare module '@nuxt/types' {
  interface Context {
    $docs: {
      fetch: {
        (slug: string): Promise<Page>
        (): Promise<Page[]>
      }
    }
  }
}

const plugin: Plugin = ({ $content, i18n: { locale }}, inject) => {
  async function fetchDocs(): Promise<Page[]> {
    const index = await $content('docs', 'index').fetch<Index>() as Index
    const slugs = index.pages.map((v) => [v, locale].join('.'))
    const slugIndex = Object.fromEntries(slugs.map((slug, i) => [slug, i]))
    const pages = await $content('docs')
      .where({ slug: { $in: slugs }})
      .fetch<Page>() as Page[]
    return pages
      .map((page) => ({ ...page, path: page.path.split('.')[0] }))
      .sort((a, b) => slugIndex[a.slug] - slugIndex[b.slug])
  }

  async function fetchDoc(slug: string): Promise<Page> {
    return await $content('docs', [slug, locale].join('.')).fetch<Page>() as Page
  }

  inject('docs', {
    fetch: async (slug?: string) => slug ? await fetchDoc(slug) : await fetchDocs(),
  })
}

export default plugin
