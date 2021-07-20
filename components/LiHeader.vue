<template>
  <header class="header">
    <div class="flex items-center">
      <span>Cotowali</span>
    </div>
    <nav>
      <ul class="flex h-full">
        <li><nuxt-link class="nav-item-anchor" to="/docs">Docs</nuxt-link></li>
        <li>
          <a
            class="nav-item-anchor"
            href="https://github.com/cotowali/cotowali"
            target="_blank"
            rel="external noopener noreferrer"
          >GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiHeader',
})
</script>

<style scoped>
  .header {
    @apply flex justify-between;
    @apply fixed w-full;
    @apply px-4;
    @apply bg-brand-red shadow;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply hover:bg-brand-red-lighten-1;

    @apply px-2;
  }
</style>
