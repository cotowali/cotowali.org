<template>
  <section class="chapter">
    <h2 class="chapter-title">{{ chapter.title }}</h2>
    <ul class="chapter-pages">
      <li v-for="page in chapter.pages" :key="page.slug">
        <nuxt-link
          v-slot="{ href, navigate, isActive }"
          :to="localePath(page.path)"
          custom
        >
          <div class="flex items-end justify-between">
            <a class="link page-link" :class="{ 'link-active': isActive }" :href="href" @click="navigate">
              {{ page.title }}
            </a>
            <LiButton text icon circle @click="pageTocExpanded[page.slug] = !pageTocExpanded[page.slug]">
              <LiIcon :icon="mdiRight" aria-label="expand" />
            </LiButton>
          </div>
        </nuxt-link>
        <scrollactive v-if="page.toc.length > 0" active-class="link-active">
          <LiCollapse :expanded="pageTocExpanded[page.slug]">
            <ul class="page-toc">
              <li v-for="link of page.toc" :key="link.id" :class="`link-depth-${link.depth - 1}`">
                <nuxt-link
                  :to="localePath(page.path + '#' + link.id)"
                  class="link section-link scrollactive-item"
                >
                  {{ link.text }}
                </nuxt-link>
              </li>
            </ul>
          </LiCollapse>
        </scrollactive>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Chapter } from '@/plugins/docs'
import { mdiChevronRight as mdiRight } from '@mdi/js'

export default Vue.extend({
  name: 'DocsSidenavChapter',
  props: {
    chapter: {
      type: Object as PropType<Chapter>,
      required: true,
    },
  },
  data() {
    return {
      mdiRight,
      pageTocExpanded: Object.fromEntries(
        this.chapter.pages.map((p) => [p.slug, false]),
      ),
    }
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

.link {
  @apply inline-block;
  @apply hover:underline hover:text-brand-red;
  text-underline-offset: 3px;
  text-underline-thickness: 2px;
}

.link-active {
  @apply text-brand-red;
  @apply font-bold;
}

.link-depth-2 {
  @apply px-2 text-sm;
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
