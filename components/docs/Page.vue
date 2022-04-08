<template>
  <article class="px-12 pt-8">
    <Alert v-if="$i18n.locale !== 'ja'">
      <p>We are currently working on the Japanese documentation.</p>
      <p>Documentation in other languages will be provided after the Japanese documentation is written.</p>
    </Alert>
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
