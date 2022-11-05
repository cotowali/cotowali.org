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
          :aria-expanded="ariaExpanded"
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
      <ul class="page-toc">
        <li
          v-for="link of page.toc"
          :key="link.id"
          :class="`link-depth-${link.depth - 1}`"
        >
          <nuxt-link
            :to="localePath(page.path + '#' + link.id)"
            class="link section-link scrollactive-item"
          >
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </LiCollapse>
  </li>
</template>

<script setup lang="ts">
import { Page } from '@/plugins/docs'
import { mdiChevronRight as mdiRight } from '@mdi/js'

const route = useRoute()
const localePath = useLocalePath()

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

.link-depth-2 {
  @apply px-2 text-sm;
}

.page-toc {
  @apply flex flex-col;
  @apply px-2;
}

.page-link {
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
