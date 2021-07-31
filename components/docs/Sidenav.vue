<template>
  <LiSidenav>
    <DocsSidenavChapter
      v-for="chapter in docs.chapters"
      :key="chapter.title"
      :chapter="chapter"
    />
  </LiSidenav>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Docs } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsSidenav',
  props: {
    docs: {
      type: Object as PropType<Docs>,
      required: true,
    },
  },
})
</script>
