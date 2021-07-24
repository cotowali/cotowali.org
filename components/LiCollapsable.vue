<template>
  <transition name="collapsable" @before-enter="beforeEnter" @enter="enter" @beforeLeave="beforeLeave" @leave="leave">
    <slot class="body" />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

// TODO: WIP
export default Vue.extend({
  name: 'LiCollapsable',
  methods: {
    beforeEnter(_el: HTMLElement) {
      // TODO
    },
    enter(_el: HTMLElement) {
      // TODO
    },
    beforeLeave(_el: HTMLElement) {
      // TODO
    },
    leave(_el: HTMLElement) {
      // TODO
    },
  },
})
</script>
