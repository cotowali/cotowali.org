<template>
  <LiPage>
    <template #left>
      <DocsSidenav :docs="docs" />
    </template>
    <DocsPage :page="page" />
  </LiPage>
</template>

<script setup lang="ts">
import { Docs, Page } from '@/plugins/docs'
definePageMeta({ layout: 'raw' })

// TODO: It's dummy data
const page: Page = {
  title: 'page',
  slug: 'page',
  path: '/docs/page',
  revision: '0',
  locale: 'en',
  latestRevisionLocale: 'en',
}

const docs: Docs = {
  chapters: [{
    title: 'chapter',
    pages: [page],
  }]
}
</script>
