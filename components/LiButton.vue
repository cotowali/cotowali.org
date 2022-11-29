<template>
  <span
    v-if="!clickable"
    class="cursor-default"
    :class="classes"
  >
    <slot />
  </span>

  <a
    v-else-if="useAnchorTag"
    :class="classes"
    :href="href"
  >
    <slot />
  </a>

  <nuxt-link
    v-else-if="useNuxtLinkTag"
    :class="classes"
    :to="to"
  >
    <slot />
  </nuxt-link>

  <button
    v-else
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
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
  rounded: {
    type: Boolean,
  },
  dense: {
    type: Boolean,
  },

  // behavior
  hover: {
    type: Boolean,
    default: undefined, // eslint-disable-line  vue/no-boolean-default
  },
  clickable: {
    type: Boolean,
    default: true, // eslint-disable-line  vue/no-boolean-default
  },
})

const useAnchorTag = computed(() => !!props.href)
const useNuxtLinkTag = computed(() => !!props.to)
const size = computed(() => (
  (props.large && 'large') ||
  (props.small && 'small') ||
  (props.text && 'text') ||
  'default'
))

const color = computed(() => (
  (props.red && 'red') ||
  (props.darkRed && 'dark-red') ||
  ((props.plain || props.text) && 'plain') ||
  'red'
))

const classes = computed(() => {
  const hover = props.hover ||
    (props.hover === undefined && props.clickable) // when hover is not specified, hover is true if clickable
  return {
    button: true,
    circle: props.circle,
    icon: props.icon,
    hover,
    dense: props.dense,
    [`size-${ size.value }`]: true,
    [`color-${ color.value }`]: true,
    rounded: props.rounded,
  }
})
</script>

<style scoped>
  .button {
    @apply rounded-sm;
    @apply no-underline hover:no-underline;
    @apply inline-flex items-center justify-center;
  }

  .circle, .rounded {
    @apply rounded-full;
  }

  .size-small {
    @apply px-2 h-8 min-w-8;
  }
  .size-small.dense {
    @apply h-6
  }
  .size-small.circle,
  .size-small.icon {
    @apply w-8;
  }

  .size-default {
    @apply px-4 h-10 min-w-10;
  }
  .size-default.dense {
    @apply h-8
  }
  .size-default.circle,
  .size-default.icon {
    @apply w-10;
  }

  .size-large {
    @apply px-6 h-12 min-w-12;
  }
  .size-large.dense {
    @apply h-10;
  }
  .size-large.circle,
  .size-large.icon {
    @apply w-12;
  }

  .color-red {
    @apply text-white bg-brand-red;
  }
  .color-red.hover {
    @apply hover:bg-brand-red-lighten-1;
  }
  .color-dark-red {
    @apply text-white bg-brand-dark-red;
  }
  .color-dark-red.hover {
    hover:bg-brand-dark-red-lighten-1;
  }
  .color-plain {
    @apply bg-opacity-0 hover:bg-white;
  }
  .color-plain.hover {
    @apply hover:bg-opacity-10;
  }
</style>
