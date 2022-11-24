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

const { currentRoute: route } = useRouter()
const { fetchDocs, fetchDoc } = useDocs()

const path = computed(() => route.value.params.path)
const { data: docs } = await useAsyncData(() => fetchDocs(), { watch: [path] })
const { data: page } = await useAsyncData(() => fetchDoc(path.value), { watch: [path] })
</script>
