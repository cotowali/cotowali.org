<template>
  <header class="header">
    <div class="flex items-center">
      <nuxt-link :to="localePath('/')"><CotowaliLogoText /></nuxt-link>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <LiButton small :to="localePath('/docs/getting-started')">
            Docs
          </LiButton>
        </li>
        <li><LiLanguageSwitcher /></li>
        <li>
          <LiButton
            small
            circle
            icon
            href="https://github.com/cotowali/cotowali"
            target="_blank"
            rel="external noopener noreferrer"
          >
            <LiIcon
              aria-label="github"
              :icon="mdiGithub"
            />
          </LiButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { mdiGithub } from '@mdi/js'
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
