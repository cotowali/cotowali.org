<template>
  <LiPage>
    <template #left>
      <DocsSidenav :docs="docs" />
    </template>
    <DocsPage :page="page" />
  </LiPage>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'raw',
  async asyncData({ params: { pathMatch: path }, $docs }) {
    return {
      docs: await $docs.fetch(),
      page: await $docs.fetch(path),
    }
  },
})
</script>
