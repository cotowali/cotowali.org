<template>
  <LiButton
    small
    dense
    red
    :to="to"
    :clickable="!!to"
    v-on="$listeners"
  >
    <slot />
  </LiButton>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiChip',
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
  },
})
</script>
