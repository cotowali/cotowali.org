import { queryContent, useI18n } from '#imports'
import type { Page, Docs, ContentIndex, ContentChapter } from '@/types/docs'

export default () => {
  const i18n = useI18n()
  async function fetchDocs(): Promise<Docs> {
    const contentIndex = await queryContent<ContentIndex>().where({ _path: '/docs' }).findOne()

    const fetchChapter = async (contentChapter: ContentChapter, locale: string) => {
      const paths = contentChapter.pages.map((v) => '/docs/' + v)
      const pathIndex = Object.fromEntries(paths.map((path, i) => [path, i]))
      const pages: Page[] = (
        await queryContent<Page>('docs')
          .where({ _path: { $in: paths.map((v) => [v, locale].join('.')) } })
          .find()
      ).map((page) => (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        { ...page, path: page._path!.split('.')[0], locale }
      ))
      pages.sort((a, b) => pathIndex[a.path] - pathIndex[b.path])

      return {
        title: contentChapter.title[locale],
        pages,
      }
    }
    const chapters = await Promise.all(
      contentIndex.chapters.map((c) => fetchChapter(c, i18n.locale.value)),
    )
    return { chapters }
  }

  async function fetchPage(path: string | string[], locale: string) {
    const sPath = `${ (typeof path === 'string' ? path : path.join('/')) }`
    const page = await queryContent<Page>('docs')
      .where({ _path: `/docs/${ sPath }.${ locale }` }).findOne()
    page.path = sPath
    page.locale = locale
    return page
  }

  async function fetchDoc(path: string | string[]): Promise<Page> {
    const locale = i18n.locale.value
    const localeCodes = i18n.localeCodes.value

    const page = await fetchPage(path, locale)
    page.latestRevisionLocale = locale
    let latestRevision = page.revision

    const pages = await Promise.all(localeCodes.map(async (locale) => await fetchPage(path, locale)))
    pages.forEach((v) => {
      if (v.revision > latestRevision) {
        latestRevision = v.revision
        page.latestRevisionLocale = v.locale
      }
    })

    return page
  }
  return { fetchDocs, fetchDoc }
}
