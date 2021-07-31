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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Chapter } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsSidenavChapter',
  props: {
    chapter: {
      type: Object as PropType<Chapter>,
      required: true,
    },
  },
})
</script>

<style scoped>
.chapter-title {
  @apply font-bold;
}

.chapter-pages {
  @apply mx-4 mt-2 mb-6;
}
</style>
