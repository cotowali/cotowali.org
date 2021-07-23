<template>
  <a v-if="useAnchorTag" :class="classes" :href="href">
    <slot />
  </a>

  <nuxt-link v-else-if="useNuxtLinkTag" :class="classes" :to="to">
    <slot />
  </nuxt-link>

  <button v-else :class="classes" :type="type">
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

    // size
    large: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },

    // color
    color: {
      type: String,
      default: 'red',
      validator: (v) => ['red', 'dark-red'].includes(v),
    },

  },
  computed: {
    useAnchorTag(): boolean {
      return !!this.href
    },
    useNuxtLinkTag(): boolean {
      return !!this.to
    },
    size(): string {
      return (
        (this.large && 'large') ||
        (this.small && 'small') ||
        'default'
      )
    },
    classes(): { [key:string]: boolean } {
      return {
        button: true,
        [`size-${this.size}`]: true,
        [`color-${this.color}`]: true,
      }
    },
  },
})
</script>

<style scoped>
  .button {
    @apply rounded;
    @apply flex items-center justify-center;
  }

  .circle {
    @apply rounded-full;
  }

  .size-small {
    @apply px-2 h-8 min-w-8;
  }
  .size-small.circle {
    @apply w-8;
  }

  .size-default {
    @apply px-4 h-10 min-w-10;
  }
  .size-default.circle {
    @apply w-10;
  }

  .size-large {
    @apply px-6 h-12 min-w-12;
  }
  .size-large.circle {
    @apply w-12;
  }

  .color-red {
    @apply bg-brand-red hover:bg-brand-red-lighten-1;
  }
  .color-dark-red {
    @apply bg-brand-dark-red hover:bg-brand-dark-red-lighten-1;
  }
</style>
