<template>
  <div class="fill-current" :style="{ width: size, height: size }">
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

<script lang="ts">
export default {
  name: 'LiIcon',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
defineProps({
 icon: {
   type: String,
   required: true,
 },
 size: {
   type: String,
   default: '1.5rem',
 },
})
</script>
