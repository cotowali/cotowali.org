<template>
  <header
    class="header header-height"
    v-bind="$attrs"
  >
    <div class="flex items-center">
      <nuxt-link :to="localePath('/')">
        <CotowaliLogoText />
      </nuxt-link>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <LiButton
            small
            :to="localePath('/docs/getting-started')"
          >
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
  <div class="header-height" />
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
  .header-height {
    @apply h-12;
  }
  .nav-list {
    @apply flex items-center gap-x-2;
  }
</style>
