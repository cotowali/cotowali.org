<template>
  <span class="fill-current size">
    <svg role="img" viewBox="0 0 24 24" class="size">
      <path :d="icon" />
    </svg>
  </span>
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
  },
})
</script>

<style computed>
.size {
  @apply h-7 w-7;
}
</style>
