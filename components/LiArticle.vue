<template>
  <article class="px-12 pt-article-pt">
    <slot name="above" />

    <div class="title-box">
      <h1 class="title">
        {{ title }}
      </h1>
      <div
        v-if="titleSubtext"
        class="subtext"
      >
        {{ titleSubtext }}
      </div>
    </div>
    <div class="article-content">
      <ContentRenderer :value="content" />
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ content: object, title: string, titleSubtext?: string }>()
</script>

<style>
.article-content {
  @apply leading-relaxed
}
.article-content p,
.article-content pre {
  @apply mt-2;
}
.article-content p a {
  @apply text-brand-red;
  @apply hover:underline;
}

.article-content h2 {
  @apply text-2xl font-bold font-title;
  @apply mt-12 mb-6;
}
.article-content h3 {
  @apply text-xl font-bold font-title;
  @apply mt-6 mb-2;
}
.article-content h4 {
  @apply text-lg font-bold;
  @apply mt-6;
}
.article-content h5 {
  @apply font-bold;
  @apply mt-4;
}
.article-content h6 {
  @apply font-bold;
  @apply mt-4;
}

.article-content code {
  @apply px-1 rounded-sm bg-black;
}

.article-content pre:has(code){
  @apply rounded-sm leading-normal text-xs;
  @apply p-2;
  @apply !bg-black;
}

.article-content pre code {
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
