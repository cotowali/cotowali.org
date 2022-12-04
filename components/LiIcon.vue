<template inheritAttrs="false">
  <div
    class="fill-current"
    :style="{ width: size, height: size }"
  >
    <svg
      v-bind="$attrs"
      role="img"
      viewBox="0 0 24 24"
      :width="size"
      :height="size"
    >
      <path :d="icon" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import * as icons from '@/assets/icons'

const props = defineProps({
  name: {
    type: String,
    default: null,
    validator: (v: string | null) => v && Object.keys(icons).includes(v) || true,
  },
  path: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: '1.5rem',
  },
})

const icon = computed(() => props.path ?? icons[props.name])
</script>
