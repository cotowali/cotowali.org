<template>
  <LiArticle :content-path="contentPath" />
</template>

<script setup lang="ts">
const route = useRoute()
const { contentPathForCurrentLocale } = useLocaleContent()

const contentPath = computed(() =>
  contentPathForCurrentLocale('articles', ...route.params.path),
)
</script>
