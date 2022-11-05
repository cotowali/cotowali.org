<template>
  <LiPage>
    <template #left>
      <DocsSidenav :docs="docs" />
    </template>
    <DocsPage :page="page" />
  </LiPage>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Docs, Page } from '@/types/docs'
definePageMeta({ layout: 'raw' })

const { fetchDocs, fetchDoc } = useDocs()
const { data: docs } = await useAsyncData(() => fetchDocs())
const { data: page } = await useAsyncData(() => fetchDoc('/getting-started'))
</script>
