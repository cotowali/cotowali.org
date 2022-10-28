<template>
  <a
    :href="url"
    target="_blank"
    class="inline-block"
    rel="external noopener noreferrer"
  >
    <figure class="flex flex-col justify-center inline-block">
      <template v-if="small">
        <img :src="image" class="rounded" height="80px" width="80px">
        <figcaption class="mt-2 text-center text-sm">{{ name }}</figcaption>
      </template>
      <template v-else>
        <img :src="image" class="rounded" height="120px" width="120px">
        <figcaption class="mt-2 text-center">{{ name }}</figcaption>
      </template>
    </figure>
  </a>
</template>

<script lang="ts">
export default {
  name: 'LiSponsor',
}
</script>

<script setup lang="ts">
defineProps<{
  name: String,
  image: String,
  url: String,
  small: Boolean,
}>()
</script>
