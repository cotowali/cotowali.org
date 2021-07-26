<template>
  <LiSidenav>
    <DocsSidenavChapter
      v-for="chapter in chapters"
      :key="chapter.title"
      class="px-6"
      :chapter="chapter"
    />
  </LiSidenav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chapter } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsSidenav',
  data: () => ({ chapters: [] as Chapter[] }),
  async fetch() {
    this.chapters = await this.$docs.fetch().then((v) => v.chapters)
  },
})
</script>
