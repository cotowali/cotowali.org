<template>
  <LiMeta />
  <LiPage no-footer>
    <div class="error-page">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl font-bold text-brand-red">
          {{ error.statusCode }}
        </h1>
        <div v-if="error.statusCode === '404'">
          Page not found
        </div>
        <div v-else>
          An error occurred
        </div>
      </div>
    </div>

    <div class="absolute w-full flex justify-center top-2/3">
      <nuxt-link
        to="/"
        class="font-bold text-brand-red hover:underline"
      >
        Go back to Home
      </nuxt-link>
    </div>
  </LiPage>
</template>

<script lang="ts">
export default {
  layout: 'raw',
}
</script>

<script setup lang="ts">
const error = useError()
</script>

<style scoped>
.error-page {
  @apply fixed h-screen w-screen -top-header-height;
  @apply flex flex-col items-center justify-center;
  @apply gap-y-6;
}
</style>
