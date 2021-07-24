<template>
  <div class="sidenav-wrapper">
    <nav class="sidenav">
      <ul>
        <li v-for="page in pages" :key="page.slug">
          <DocsSidenavItem class="px-6" :page="page" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsSidenav',
  data: () => ({ pages: [] as Page[] }),
  async fetch() {
    this.pages = await this.$docs.fetch()
  },
})
</script>

<style scoped>
.sidenav-wrapper {
  @apply pr-48 bg-dark-darken-1 min-h-full;
}

.sidenav {
  @apply fixed w-48 pt-6;
}
</style>
