<template>
  <DocsPage :page="page" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'docs',
  async asyncData({ params: { slug }, $docs }) {
    const page = await $docs.fetch(slug)
    return { page }
  },
})
</script>
