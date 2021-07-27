<template>
  <LiPage no-footer>
    <div class="error-page">
      <div v-if="error.statusCode === 404" class="flex flex-col items-center">
        <h1 class="text-6xl font-bold text-red">404</h1>
        <div>Page not found</div>
      </div>
      <div v-else>
        An error occured
      </div>
    </div>

    <div class="absolute w-full flex justify-center top-2/3">
      <nuxt-link to="/" class="font-bold text-red hover:underline">Go back to Home</nuxt-link>
    </div>
  </LiPage>
</template>

<script>
export default {
  layout: 'raw',
  props: {
    error: { type: Object, required: true },
  },
}
</script>


<style scoped>
.error-page {
  @apply absolute h-screen w-screen top-0;
  @apply flex flex-col items-center justify-center;
  @apply gap-y-6;
}
</style>
