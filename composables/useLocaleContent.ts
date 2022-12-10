import { queryContent, useI18n } from '#imports'
export default () => {
  const i18n = useI18n()
  const currentLocale = () => i18n.locale.value
  const localeCodes = () => i18n.localeCodes.value
  function contentPathForLocale(locale: string, ...parts: string[]): string {
    const path = parts
      .map((s) => s.split('/'))
      .flat()
      .filter((s) => s.length > 0)
      .join('/')
    return `/${ path }.${ locale }`
  }
  function contentPathForCurrentLocale(...parts: string[]): string {
    return contentPathForLocale(currentLocale(), ...parts)
  }

  const fetchContentForLocale = async <T>(locale: string, ...pathParts: string[]) =>
    await queryContent<T>()
      .where({ _path: contentPathForLocale(locale, ...pathParts) })
      .findOne()
  const fetchContentForCurrentLocale = async <T>(...pathParts: string[]) =>
    await fetchContentForLocale<T>(currentLocale(), ...pathParts)

  const trimLocaleFromPath = (path: string) => path.split('.')[0]

  return {
    currentLocale,
    localeCodes,
    contentPathForLocale,
    contentPathForCurrentLocale,
    fetchContentForLocale,
    fetchContentForCurrentLocale,
    trimLocaleFromPath,
  }
}
