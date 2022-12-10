import { queryContent, useLocaleContent } from '#imports'
import type { Page, Docs, ContentIndex, ContentChapter } from '@/types/docs'

export default () => {
  const {
    currentLocale,
    contentPathForLocale,
    fetchContentForCurrentLocale,
    trimLocaleFromPath,
  } = useLocaleContent()
  async function fetchDocs(): Promise<Docs> {
    const contentIndex = await queryContent<ContentIndex>().where({ _path: '/docs' }).findOne()

    const fetchChapter = async (contentChapter: ContentChapter, locale: string) => {
      const paths = contentChapter.pages
        .map((path) => contentPathForLocale(locale, 'docs', path))
      const pathIndex = Object.fromEntries(paths.map((path, i) => [path, i]))
      const pages =
        await queryContent<Page>('docs')
          .where({ _path: { $in: paths } })
          .find()

      pages.sort((a, b) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        pathIndex[trimLocaleFromPath(a._path!)] - pathIndex[b._path!],
      )

      return {
        title: contentChapter.title[locale],
        pages,
      }
    }
    const chapters = await Promise.all(
      contentIndex.chapters.map((c) => fetchChapter(c, currentLocale())),
    )
    return { chapters }
  }

  const fetchDoc = async (pathParts: string[]) =>
    fetchContentForCurrentLocale('docs', ...pathParts)

  return { fetchDocs, fetchDoc }
}
