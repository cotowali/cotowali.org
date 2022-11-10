import { queryContent, useI18n } from '#imports'
import type { ContentIndex } from '@/types/docs'

export default () => {
  const i18n = useI18n()
  async function fetchDocs(): Promise<Docs> {
    const contentIndex = await queryContent<ContentIndex>().where({ _path: '/docs' }).findOne()

    const fetchChapter = async (contentChapter: ContentChapter, locale: string) => {
      const paths = contentChapter.pages.map((v) => '/docs/' + v)
      const pathIndex = Object.fromEntries(paths.map((path, i) => [path, i]))
      const pages = (
        await queryContent<Page>('docs')
          .where({ _path: { $in: paths.map((v) => [v, locale].join('.')) } })
          .find()
      ).map((page) => {
        return ({ ...page, path: page._path.split('.')[0], locale })
      })
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

  async function fetchPage(path: string, locale: string) {
    const page = await queryContent<Page>('docs')
      .where({ _path: ['/docs' + path, locale].join('.') }).findOne()
    page.path = path
    page.locale = locale
    return page
  }

  async function fetchDoc(path: string): Promise<Page> {
    const locale = i18n.locale.value
    const localeCodes = i18n.localeCodes.value

    const page = fetchPage(path, locale)
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
