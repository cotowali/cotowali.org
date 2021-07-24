<template>
  <header class="header">
    <div class="flex items-center font-bold font-title">
      <nuxt-link :to="localePath('/')">Cotowali</nuxt-link>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <LiButton small :to="localePath('/docs/getting-started')">
            Docs
          </LiButton>
        </li>
        <li>
          <LiButton
            small
            circle
            icon
            href="https://github.com/cotowali/cotowali"
            target="_blank"
            rel="external noopener noreferrer"
          >
            <LiIcon :icon="mdiGithub" />
          </LiButton>
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
    @apply flex justify-between items-center;
    @apply fixed w-full z-front;
    @apply px-4;
    @apply bg-brand-red;
  }
  .nav-list {
    @apply flex items-center gap-x-2;
  }
</style>
