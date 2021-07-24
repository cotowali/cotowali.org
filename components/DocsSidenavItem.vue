<template>
  <div>
    <nuxt-link
      :to="localePath(page.path)"
      class="link"
      active-class="link-active"
    >
      {{ page.title }}
    </nuxt-link>
    <scrollactive v-if="page.toc.length > 0" tag="ul" class="px-2" active-class="link-active">
      <li v-for="link of page.toc" :key="link.id">
        <nuxt-link
          :to="localePath(page.path + '#' + link.id)"
          class="link scrollactive-item"
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
  @apply hover:underline;
}
.link-active {
  @apply text-brand-red;
}
</style>
