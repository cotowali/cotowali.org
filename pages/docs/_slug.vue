<template>
  <article class="p-12">
    <h1 class="title">{{ entry.title }}</h1>
    <nuxt-content :document="entry" />
  </article>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'docs',
  async asyncData({ params: { slug }, $docs }) {
    const entry = await $docs.fetch(slug)
    return { entry }
  },
})
</script>

<style>
  .title {
    @apply text-3xl text-brand-red font-black;
    @apply pb-2;
    @apply border-b-2;
  }
</style>
