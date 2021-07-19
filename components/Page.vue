<template>
  <div>
    <header class="header">
      <div class="flex items-center">
        <span>Cotowali</span>
      </div>
      <nav>
        <ul class="flex h-full">
          <li><a class="nav-item-anchor" href="/docs">Docs</a></li>
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

    <div class="page">
      <template v-if="$slots.left">
        <slot name="left" />
      </template>
      <div class="content">
        <main>
          <slot />
        </main>

        <footer class="footer">
          <p class="text-sm">
            Copyright &copy; 2021 The Cotowali Authors
          </p>
        </footer>
      </div>
      <template v-if="$slots.right">
        <slot name="right" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
})
</script>


<style>
  .page {
    @apply flex justify-between;
    @apply min-h-full w-full;
    @apply bg-dark;
    @apply pt-12;
  }
  .header {
    @apply flex justify-between;
    @apply fixed w-full h-12;
    @apply px-4;
    @apply bg-brand-red shadow;
  }
  .content {
    @apply flex flex-col justify-between;
    @apply flex-grow;
  }
  .footer {
    @apply text-center;
    @apply p-4;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply hover:bg-brand-red-lighten-1;

    @apply px-2;
  }
</style>
