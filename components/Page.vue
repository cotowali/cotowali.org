<template>
  <div>
    <LiHeader class="h-12" />

    <div class="page pt-12">
      <template v-if="$slots.left">
        <slot name="left" />
      </template>
      <div class="content">
        <main>
          <slot />
        </main>

        <footer class="footer text-xs">
          <p>Copyright &copy; zakuro &lt;z@kuro.red&gt;</p>
          <p>Design by zakuro &amp; Yuki Amane (Pianoforte)</p>
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
  body {
    @apply text-white;
    @apply bg-dark;
    @apply tracking-wide;
    font-weight: 500;
    font-family: "Yu Gothic", sans-serif;
  }
</style>

<style scoped>
  .page {
    @apply flex justify-between;
    @apply min-h-screen w-full;
    @apply bg-dark;
  }
  .content {
    @apply flex flex-col justify-between;
    @apply flex-grow;
  }
  .footer {
    @apply text-center;
    @apply p-4;
  }
</style>
