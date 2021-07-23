<template>
  <div class="fill-current" :style="{ width: size, height: size }">
    <svg role="img" viewBox="0 0 24 24" :width="size" :height="size">
      <path :d="icon" />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '1.5rem',
    },
  },
})
</script>
