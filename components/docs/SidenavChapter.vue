<template>
  <section class="chapter">
    <h2 class="chapter-title">{{ chapter.title }}</h2>
    <ul class="chapter-pages">
      <DocsSidenavChapterPage
        v-for="page in chapter.pages"
        :key="page.slug"
        :page="page"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Chapter } from '@/plugins/docs'

defineProps<{ chapter: Chapter }>()
</script>

<style scoped>
.chapter-title {
  @apply font-bold;
}

.chapter-pages {
  @apply ml-4 mt-2 mb-6;
}
</style>
