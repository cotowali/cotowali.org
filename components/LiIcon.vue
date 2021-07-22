<template>
  <span style="height: 24px; width: 24px;" class="fill-current">
    <svg role="img" viewBox="0 0 24 24">
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
