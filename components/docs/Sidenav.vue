<template>
  <LiSidenav>
    <DocsSidenavChapter
      v-for="chapter in docs.chapters"
      :key="chapter.title"
      :chapter="chapter"
    />
  </LiSidenav>
</template>

<script setup lang="ts">
import { Docs } from '@/plugins/docs'

defineProps<{ docs: Docs }>()
</script>
