<template>
  <div class="sidenav-wrapper" :class="{ closed }">
    <nav class="sidenav" :class="{ closed }">
      <slot />
    </nav>
    <LiButton icon dark-red class="menu-button" @click="closed = !closed">
      <LiIcon :icon="mdiMenu" />
    </LiButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMenu } from '@mdi/js'

export default Vue.extend({
  name: 'LiSidenav',
  data: () => ({
    closed: false,
    mdiMenu,
  }),
})
</script>

<style scoped>
.sidenav-wrapper {
  @apply pr-64 min-h-full;
  transition-property: padding-right;
}

.sidenav-wrapper.closed {
  @apply pr-0;
}

.sidenav {
  @apply fixed w-64 pt-6;
  @apply overflow-y-scroll h-full;
  transition-property: transform;
  @apply translate-x-0;
}

.sidenav.closed {
  @apply -translate-x-full;
}

.sidenav, .sidenav-wrapper {
  @apply duration-300 ease-out;
}

.menu-button {
  @apply fixed;
  @apply left-[20px] bottom-[20px];
}
</style>
