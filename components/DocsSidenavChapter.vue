<template>
  <section class="chapter">
    <h2 class="chapter-title">{{ chapter.title }}</h2>
    <ul class="chapter-pages">
      <li v-for="page in chapter.pages" :key="page.slug">
        <nuxt-link
          :to="localePath(page.path)"
          class="link page-link"
          active-class="link-active"
        >
          {{ page.title }}
        </nuxt-link>
        <scrollactive v-if="page.toc.length > 0" tag="ul" class="page-toc" active-class="link-active">
          <li v-for="link of page.toc" :key="link.id">
            <nuxt-link
              :to="localePath(page.path + '#' + link.id)"
              class="link section-link scrollactive-item"
            >
              {{ link.text }}
            </nuxt-link>
          </li>
        </scrollactive>
      </li>
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
  @apply mt-4 mb-6;
}

.link {
  @apply inline-block;
  @apply hover:underline hover:text-red;
  text-underline-offset: 3px;
  text-underline-thickness: 2px;
}

.link-active {
  @apply text-red;
  @apply font-bold;
}

.page-toc {
  @apply flex flex-col;
  @apply px-2;
}

.page-link {
}

.section-link {
  @apply mt-1;
  @apply text-sm
}
</style>
