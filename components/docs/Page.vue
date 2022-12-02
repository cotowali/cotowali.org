<template>
  <LiArticle
    :title="page.title"
    :title-subtext="`rev${ page.revision }`"
    :content="page"
  >
    <template
      v-if="page.locale !== page.latestRevisionLocale"
      #above
    >
      <Alert>
        <p>This documentation for current locale is out of date.</p>
        <p>
          The latest document is available in
          <nuxt-link
            class="font-bold hover:underline"
            :to="switchLocalePath(page.latestRevisionLocale)"
          >
            another locale
          </nuxt-link>
        </p>
      </Alert>
    </template>
  </LiArticle>
</template>

<script setup lang="ts">
import { Page } from '@/types/docs'

const switchLocalePath = useSwitchLocalePath()
const scrollUrlSync = useScrollUrlSync()

const props = defineProps<{ page: Page }>()

watch(props.page, (page, oldPage) => {
  const { registerId, removeId } = scrollUrlSync

  interface Link { id: string, children?: Link[] }
  const getIdsInLink = (link: Link): string[] =>
    [link.id, ...(link.children ?? []).map(getIdsInLink).flat()]
  const getIdsInPage = (p: Page): string[] =>
    p.body.toc?.links.map(getIdsInLink).flat() || []

  if (oldPage) {
    getIdsInPage(oldPage).forEach(removeId)
  }
  getIdsInPage(page).forEach(registerId)
}, {
  immediate: true,
})
</script>

<style>
.docs-content {
  @apply leading-relaxed
}
.docs-content p,
.docs-content pre {
  @apply mt-2;
}
.docs-content p a {
  @apply text-brand-red;
  @apply hover:underline;
}

.docs-content h2 {
  @apply text-2xl font-bold font-title;
  @apply mt-12 mb-6;
}
.docs-content h3 {
  @apply text-xl font-bold font-title;
  @apply mt-6 mb-2;
}
.docs-content h4 {
  @apply text-lg font-bold;
  @apply mt-6;
}
.docs-content h5 {
  @apply font-bold;
  @apply mt-4;
}
.docs-content h6 {
  @apply font-bold;
  @apply mt-4;
}

.docs-content code {
  @apply px-1 rounded-sm bg-black;
}

.docs-content pre:has(code){
  @apply rounded-sm leading-normal text-xs;
  @apply p-2;
  @apply !bg-black;
}

.docs-content pre code {
  @apply p-0; /* cancel `code { px-1 }` */
}
</style>

<style scoped>
.title-box {
  @apply flex items-end justify-between;
  @apply mb-12 pb-1;
  @apply border-b border-opacity-75;
}
.title {
  @apply text-3xl text-brand-red font-black;
}

.revision {
  @apply text-sm opacity-75;
}
</style>
