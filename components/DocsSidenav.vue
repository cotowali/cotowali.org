<template>
  <div class="sidenav-wrapper" :class="{ closed }">
    <nav class="sidenav" :class="{ closed }">
      <ul>
        <li v-for="page in pages" :key="page.slug">
          <DocsSidenavItem class="px-6" :page="page" />
        </li>
      </ul>
    </nav>
    <LiButton icon dark-red class="menu-button" @click="closed = !closed">
      <LiIcon :icon="mdiMenu" />
    </LiButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page } from '@/plugins/docs'
import { mdiMenu } from '@mdi/js'

export default Vue.extend({
  name: 'DocsSidenav',
  data: () => ({
    closed: false,
    pages: [] as Page[],
    mdiMenu,
  }),
  async fetch() {
    this.pages = await this.$docs.fetch()
  },
})
</script>

<style scoped>
.sidenav-wrapper {
  @apply pr-64 bg-dark-darken-1 min-h-full;
}

.sidenav-wrapper.closed {
  @apply pr-0;
}

.sidenav {
  @apply fixed w-64 pt-6;
  @apply overflow-y-scroll h-full;
}

.sidenav.closed {
  @apply w-0;
}

.menu-button {
  @apply fixed;
  @apply left-[20px] bottom-[20px];
}
</style>
