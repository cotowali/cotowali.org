<template>
  <a
    :href="url"
    target="_blank"
    class="inline-block"
    rel="external noopener noreferrer"
  >
    <figure class="flex flex-col justify-center inline-block">
      <template v-if="small">
        <img
          :src="image"
          class="rounded-sm"
          height="80"
          width="80"
        >
        <figcaption class="mt-2 text-center text-sm">{{ name }}</figcaption>
      </template>
      <template v-else>
        <img
          :src="image"
          class="rounded-sm"
          height="120"
          width="120"
        >
        <figcaption class="mt-2 text-center">{{ name }}</figcaption>
      </template>
    </figure>
  </a>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  small: {
    type: Boolean,
  },
})
</script>
