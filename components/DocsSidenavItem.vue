<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Page } from '@/lib/content'

export default Vue.extend({
  name: 'DocsSidenavItem',
  props: {
    page: {
      type: Object as PropType<Page>,
      required: true,
    },
  },
})
</script>

<style scoped>
.link {
  @apply inline-block;
  @apply hover:underline hover:text-brand-red;
  text-underline-offset: 3px;
  text-underline-thickness: 2px;
}
.link-active {
  @apply text-brand-red;
}

.page-toc {
  @apply flex flex-col;
  @apply px-2;
}

.page-link {
  @apply mt-2;
}

.section-link {
  @apply mt-1;
  @apply text-sm
}
</style>
