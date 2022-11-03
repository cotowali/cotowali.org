export interface ContentChapter {
  title: { [key: string]: string }
  pages: string[]
}

export interface ContentIndex {
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
