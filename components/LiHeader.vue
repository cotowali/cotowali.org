<template>
  <header class="header">
    <div class="flex items-center">
      <nuxt-link :to="localePath('/')">Cotowali</nuxt-link>
    </div>
    <nav>
      <ul class="flex h-full">
        <li><nuxt-link class="nav-item-anchor" :to="localePath('/docs/getting-started')">Docs</nuxt-link></li>
        <li>
          <a
            class="nav-item-anchor"
            href="https://github.com/cotowali/cotowali"
            target="_blank"
            rel="external noopener noreferrer"
          >
            <LiIcon :icon="mdiGithub" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiGithub } from '@mdi/js'

export default Vue.extend({
  name: 'LiHeader',
  data: () => ({ mdiGithub }),
})
</script>

<style scoped>
  .header {
    @apply flex justify-between;
    @apply fixed w-full;
    @apply px-4;
    @apply bg-brand-red;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply hover:bg-brand-red-lighten-1;

    @apply px-2;
  }
</style>
