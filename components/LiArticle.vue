<template>
  <article class="px-12 pt-article-pt">
    <slot name="above" />

    <div
      v-if="hasTitleBox"
      class="title-box"
    >
      <h1 class="title">
        {{ actualTitle }}
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
interface Content extends Object {
  title?: string
}
const props = defineProps<{ content: Content, title?: string, titleSubtext?: string }>()
const actualTitle = computed(() => props.title ?? props.content.title ?? null)
const hasTitleBox = computed(() => actualTitle.value || props.titleSubtext)
</script>

<style>
.article-content {
  @apply leading-relaxed;

  & p,
  & pre {
    @apply mt-2;
  }
  & p a {
    @apply text-brand-red;
    @apply hover:underline;
  }

  & h2 {
    @apply text-2xl font-bold font-title;
    @apply mt-12 mb-6;
  }
  & h3 {
    @apply text-xl font-bold font-title;
    @apply mt-6 mb-2;
  }
  & h4 {
    @apply text-lg font-bold;
    @apply mt-6;
  }
  & h5 {
    @apply font-bold;
    @apply mt-4;
  }
  & h6 {
    @apply font-bold;
    @apply mt-4;
  }

  & code {
    @apply px-1 rounded-sm bg-black;
  }

  & pre:has(code){
    @apply rounded-sm leading-normal text-xs;
    @apply p-2;
    @apply !bg-black;
  }

  & pre code {
    @apply p-0; /* cancel `code { px-1 }` */
  }
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
