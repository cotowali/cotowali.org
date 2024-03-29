import type { ParsedContent, MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
export interface ContentChapter extends ParsedContent {
  title: { [key: string]: string }
  pages: string[]
}

export interface ContentIndex extends ParsedContent {
  chapters: ContentChapter[]
}

export interface Page extends MarkdownParsedContent {
  title: string
  path: string
}

export interface Chapter {
  title: string
  pages: Page[]
}

export interface Docs {
  chapters: Chapter[]
}
