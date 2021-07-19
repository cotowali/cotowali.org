<template>
  <a v-if="type === 'a'" class="button" :href="href"><slot /></a>
  <button v-else class="button" :type="type">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: null,
    },
  },
})
</script>

<style>
  .button {
    @apply px-6 py-3;
    @apply rounded shadow;
  }
</style>
