<template>
  <ul class="toc-items">
    <li
      v-for="link of links"
      :key="link.id"
    >
      <slot
        name="link"
        :link="link"
      />

      <DocsSidenavChapterPageToc
        v-if="link.children"
        :links="link.children"
      >
        <template #link="{ link: l }">
          <slot
            name="link"
            :link="l"
          />
        </template>
      </DocsSidenavChapterPageToc>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps<{
  links: TocLink[],
}>()
</script>

<style scoped>
.toc-items {
  @apply flex flex-col;
  @apply px-2;
}
</style>
