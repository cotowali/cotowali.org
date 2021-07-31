<template>
  <a v-if="useAnchorTag" :class="classes" :href="href" v-on="$listeners">
    <slot />
  </a>

  <nuxt-link v-else-if="useNuxtLinkTag" :class="classes" :to="to" v-on="$listeners">
    <slot />
  </nuxt-link>

  <button v-else :class="classes" :type="type" v-on="$listeners">
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

    red: {
      type: Boolean,
    },
    darkRed: {
      type: Boolean,
    },

    text: {
      type: Boolean,
    },
    plain: {
      type: Boolean,
    },

    // shape
    icon: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
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
        (this.text && 'text') ||
        'default'
      )
    },
    color(): string {
      return (
        (this.red && 'red') ||
        (this.darkRed && 'dark-red') ||
        ((this.plain || this.text) && 'plain') ||
        'red'
      )
    },
    classes(): { [key:string]: boolean } {
      return {
        button: true,
        circle: this.circle,
        icon: this.icon,
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
    @apply inline-flex items-center justify-center;
  }

  .circle {
    @apply rounded-full;
  }

  .size-small {
    @apply px-2 h-8 min-w-8;
  }
  .size-small.circle,
  .size-small.icon {
    @apply w-8;
  }

  .size-default {
    @apply px-4 h-10 min-w-10;
  }
  .size-default.circle,
  .size-default.icon {
    @apply w-10;
  }

  .size-large {
    @apply px-6 h-12 min-w-12;
  }
  .size-large.circle,
  .size-large.icon {
    @apply w-12;
  }

  .color-red {
    @apply bg-brand-red hover:bg-brand-red-lighten-1;
  }
  .color-dark-red {
    @apply bg-brand-dark-red hover:bg-brand-dark-red-lighten-1;
  }
  .color-plain {
    @apply bg-opacity-0 hover:bg-white hover:bg-opacity-10;
  }
</style>
