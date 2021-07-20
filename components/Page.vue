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
import LiHeader from '@/components/LiHeader.vue'

export default Vue.extend({
  name: 'Page',
  components: { LiHeader },
})
</script>

<style>
  body {
    @apply text-white;
    @apply bg-dark;
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
