<template>
  <article class="px-12 pt-8">
    <div class="title-box">
      <h1 class="title">{{ page.title }}</h1>
      <div class="version">
        ver{{ page.version }}
      </div>
    </div>
    <div class="content">
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Page } from '@/plugins/docs'

export default Vue.extend({
  name: 'DocsPage',
  props: {
    page: {
      type: Object as PropType<Page>,
      required: true,
    },
  },
})
</script>

<style>
.nuxt-content {
  @apply leading-relaxed
}
.nuxt-content p {
  @apply mt-2;
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

.nuxt-content .nuxt-content-highlight pre {
  @apply rounded;
  @apply !bg-black;
}
</style>

<style scoped>
.title-box {
  @apply flex items-end justify-between;
  @apply mb-12 pb-1;
  @apply border-b border-opacity-75;
}
.title {
  @apply text-3xl text-red font-black;
}

.version {
  @apply text-sm opacity-75;
}
</style>
