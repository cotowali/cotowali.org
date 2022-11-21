<template>
  <li>
    <nuxt-link
      v-slot="{ href, navigate, isActive }"
      :to="localePath(page.path)"
      custom
    >
      <div class="flex items-end justify-between">
        <a
          class="link page-link"
          :class="{ 'link-active': isActive }"
          :href="href"
          @click="navigate"
        >
          {{ page.title }}
        </a>
        <LiButton
          text
          icon
          circle
          :aria-expanded="tocAriaExpanded"
          :aria-controls="tocId"
          @click="tocExpanded = !tocExpanded"
        >
          <LiIcon
            :icon="mdiRight"
            aria-label="expand"
            class="icon-expand"
            :class="{ 'expanded': tocExpanded }"
          />
        </LiButton>
      </div>
    </nuxt-link>

    <LiCollapse
      :id="tocId"
      :expanded="tocExpanded"
    >
      <DocsSidenavChapterPageToc :links="page.body.toc.links">
        <template #link="{ link }">
          <nuxt-link
            :to="localePath(page.path + '#' + link.id)"
            class="link section-link"
            :class="{ 'link-active': link.id === activeId }"
          >
            {{ link.text }}
          </nuxt-link>
        </template>
      </DocsSidenavChapterPageToc>
    </LiCollapse>
  </li>
</template>

<script setup lang="ts">

import { Page } from '@/types/docs'
import { mdiChevronRight as mdiRight } from '@mdi/js'

const route = useRoute()
const localePath = useLocalePath()
const { activeId } = useScrollUrlSync()

const props = defineProps<{ page: Page }>()

const tocExpanded = ref(localePath(props.page.path) === route.path)
const tocId = computed(() => props.page.slug + '--toc')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tocAriaExpanded = computed(() => tocExpanded.value && 'true' || 'false')
</script>

<style scoped>
.link {
  @apply inline-block;
  @apply hover:underline hover:text-brand-red;
  text-underline-offset: 3px;
  text-underline-thickness: 2px;
}

.link-active {
  @apply text-brand-red;
  @apply font-bold;
}

.toc-items {
  @apply flex flex-col;
  @apply px-2;
}

.section-link {
  @apply mt-1;
  @apply text-sm
}

.icon-expand {
  @apply transform-gpu transition-transform duration-300 ease-out;
}

.icon-expand.expanded {
  @apply rotate-90;
}
</style>
