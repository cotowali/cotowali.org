<template>
  <Page>
    <template #left>
      <DocsSidenav :docs="docs" />
    </template>
    <DocsPage :page="page" />
  </Page>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'raw',
  async asyncData({ params: { slug }, $docs }) {
    return {
      docs: await $docs.fetch(),
      page: await $docs.fetch(slug),
    }
  },
})
</script>
