<template>
  <div v-scroll-url-sync>
    <LiHeader />

    <div class="page">
      <template v-if="$slots.left">
        <slot name="left" />
      </template>

      <div class="content">
        <main class="flex-grow">
          <slot />
        </main>
        <LiFooter v-if="!noFooter" />
      </div>

      <template v-if="$slots.right">
        <slot name="right" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  noFooter: {
    type: Boolean,
  },
})

const { range } = useScrollUrlSync()
range.value = { top: 80, bottom: 120 }
</script>

<style>
body {
  @apply text-white;
  @apply bg-dark;
  @apply tracking-wide;
  @apply font-sans;
}
</style>

<style scoped>
.page {
  @apply flex justify-between;
  @apply min-h-screen w-full;
  @apply bg-dark;
}
.content {
  @apply flex flex-col justify-between;
  @apply flex-grow;
}
</style>
