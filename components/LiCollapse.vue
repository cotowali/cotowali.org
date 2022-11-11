<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <div v-show="expanded">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'LiCollapse',
}
</script>

<script setup lang="ts">
defineProps({
  expanded: {
    type: Boolean,
  },
})

// https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/

const enter = (el: HTMLElement) => {
  const { width } = getComputedStyle(el)
  el.style.width = width
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  el.style.height = 'auto'

  const { height } = getComputedStyle(el)

  el.style.width = null
  el.style.position = null
  el.style.visibility = null
  el.style.height = 0

  getComputedStyle(el).height // eslint-disable-line no-unused-expressions
  requestAnimationFrame(() => {
    el.style.height = height
  })
}

const afterEnter = (el: HTMLElement) => {
  el.style.height = 'auto'
}

const leave = (el: HTMLElement) => {
  el.style.height = getComputedStyle(el).height

  getComputedStyle(el).height // eslint-disable-line no-unused-expressions
  requestAnimationFrame(() => {
    el.style.height = '0'
  })
}
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
