<template>
  <a
    :href="url"
    target="_blank"
    class="inline-block"
    rel="external noopener noreferrer"
  >
    <figure class="flex flex-col justify-center inline-block">
      <img :src="image" height="120px" width="120px">
      <figcaption class="mt-2 text-center">{{ name }}</figcaption>
    </figure>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiSponsor',
  props: {
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
  },
})
</script>
