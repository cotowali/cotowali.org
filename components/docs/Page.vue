<template>
  <article class="px-12 pt-8">
    <Alert v-if="page.locale !== page.latestRevisionLocale">
      <p>This documentation for current locale is out of date.</p>
      <p>
        The latest document is available in
        <nuxt-link class="font-bold hover:underline" :to="switchLocalePath(page.latestRevisionLocale)">another locale</nuxt-link>
      </p>
    </Alert>

    <div class="title-box">
      <h1 class="title">{{ page.title }}</h1>
      <div class="revision">
        rev{{ page.revision }}
      </div>
    </div>
    <div class="content">
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>

<script setup lang="ts">
import Vue, { PropType } from 'vue'
import { Page } from '@/plugins/docs'

const switchLocalePath = useSwitchLocalePath()

const props = defineProps<{ page: Page }>()
const { page } = toRefs(props)
</script>

<style>
.nuxt-content {
  @apply leading-relaxed
}
.nuxt-content p {
  @apply mt-2;
}
.nuxt-content a {
  @apply text-brand-red;
  @apply hover:underline;
}

.nuxt-content h2 {
  @apply text-2xl font-bold font-title;
  @apply mt-12 mb-6;
}
.nuxt-content h3 {
  @apply text-xl font-bold font-title;
  @apply mt-6 mb-2;
}
.nuxt-content h4 {
  @apply text-lg font-bold;
  @apply mt-6;
}
.nuxt-content h5 {
  @apply font-bold;
  @apply mt-4;
}
.nuxt-content h6 {
  @apply font-bold;
  @apply mt-4;
}

.nuxt-content code {
  @apply px-1 rounded bg-black;
}

.nuxt-content .nuxt-content-highlight pre code {
  @apply p-0; /* cancel `code { px-1 }` */
}

.nuxt-content .nuxt-content-highlight pre {
  @apply rounded;
  @apply !bg-black;
}

.nuxt-content-editor {
  @apply bg-black;
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
