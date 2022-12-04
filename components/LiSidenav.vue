<template>
  <div
    class="sidenav-wrapper"
    :class="{ closed }"
  >
    <nav
      class="sidenav"
      :class="{ closed }"
    >
      <slot />
    </nav>
    <LiButton
      icon
      dark-red
      class="menu-button"
      @click="closed = !closed"
    >
      <LiIcon
        name="menu"
        :aria-label="closed ? 'open menu' : 'close menu'"
      />
    </LiButton>
  </div>
</template>

<script setup lang="ts">
const closed = ref(false)
</script>

<style scoped>
.sidenav-wrapper {
  @apply pr-60 lg:pr-72 min-h-full;
  transition-property: padding-right;
}

.sidenav-wrapper.closed {
  @apply pr-0;
}

.sidenav {
  @apply bg-dark-darken-1;
  @apply fixed w-60 lg:w-72 pt-article-pt pl-6 pr-2;
  @apply overflow-y-scroll h-full;
  transition-property: transform;
  @apply translate-x-0;
  scrollbar-color: dark;
  scrollbar-width: 0.5rem;
}

.sidenav::-webkit-scrollbar {
  background-color: rgba(0, 0, 0, 0.3);
  @apply w-2;
}

.sidenav::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  @apply rounded-lg;
}

.sidenav::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.sidenav.closed {
  @apply -translate-x-full;
}

.sidenav, .sidenav-wrapper {
  @apply duration-300 ease-out;
}

.menu-button {
  @apply fixed z-front;
  @apply left-[20px] bottom-[20px];
}
</style>
