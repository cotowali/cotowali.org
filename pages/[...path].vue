<template>
  <LiArticle
    :content="article"
  />
</template>

<script setup lang="ts">
const { currentRoute: route } = useRouter()
const { locale } = useI18n()
const { fetchContentForCurrentLocale } = useLocaleContent()

const path = computed(() => route.value.params.path)
const { data: article } = await useAsyncData(async () =>
  await fetchContentForCurrentLocale('articles', ...path.value),
  // { watch: [path, locale] }
)
watch([path, locale], async () => {
  article.value = await fetchContentForCurrentLocale('articles', ...path.value)
})
</script>
