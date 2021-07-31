<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div v-show="expanded">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

// https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
export default Vue.extend({
  name: 'LiCollapse',
  props: {
    expanded: {
      type: Boolean,
    },
  },
  methods: {
    enter(el: HTMLElement) {
      const { width } = getComputedStyle(el)
      el.style.setProperty('width', width)
      el.style.setProperty('position', 'absolute')
      el.style.setProperty('visibility', 'hidden')
      el.style.setProperty('height', 'auto')

      const { height } = getComputedStyle(el)
      el.style.setProperty('width', null)
      el.style.setProperty('position', null)
      el.style.setProperty('visibility', null)
      el.style.setProperty('height', '0')

      // Force repaint to make sure the
      // animation is triggered correctly
      getComputedStyle(el).height // eslint-disable-line no-unused-expressions
      requestAnimationFrame(() => {
        el.style.height = height
      })
    },
    afterEnter(el: HTMLElement) {
      el.style.height = 'auto'
    },
    leave(el: HTMLElement) {
      const { height } = getComputedStyle(el)
      el.style.height = height

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(el).height // eslint-disable-line no-unused-expressions
      requestAnimationFrame(() => {
        el.style.height = '0'
      })
    },
    afterLeave(_el: HTMLElement) {
      // eslint-disable-line
    },
  },
})
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  transition-property: height;
  @apply duration-300 ease-out;
  @apply overflow-hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
