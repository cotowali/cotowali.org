<template>
  <a v-if="useAnchorTag" class="button" :href="href">
    <slot />
  </a>

  <nuxt-link v-else-if="useNuxtLinkTag" class="button" :to="to">
    <slot />
  </nuxt-link>

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
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
  },
  computed: {
    useAnchorTag() {
      return !!this.href
    },
    useNuxtLinkTag() {
      return !!this.to
    },
  },
})
</script>

<style>
  .button {
    @apply px-6 py-3;
    @apply rounded;
  }
</style>
