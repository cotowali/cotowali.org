<template>
  <article class="p-12 pt-6">
    <h1 class="title">{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Page } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsPage',
  props: {
    page: {
      type: Object as PropType<Page>,
      required: true,
    },
  },
})
</script>


<style scoped>
.title {
  @apply text-3xl text-brand-red font-black;
  @apply pb-2;
  @apply border-b-2;
}
</style>
