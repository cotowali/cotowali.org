<template>
  <div class="hero">
    <div class="flex flex-col">
      <h1 class="text-brand-red text-4xl">Cotowali</h1>
      <div class="mt-1" style="padding-left: 3px;">
        <p>A statically typed script language that transpile into POSIX sh</p>
      </div>
      <div class="mt-5 flex gap-x-4">
        <LiButton class="bg-brand-red hover:bg-brand-red-lighten-1" href="/docs/getting-started">
          Get Strated
        </LiButton>
        <LiButton class="bg-brand-dark-red hover:bg-brand-dark-red-lighten-1" href="/playground">
          Try
        </LiButton>
      </div>
    </div>
    <img src="~/assets/cotowali.svg" class="h-60">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LiButton from '@/components/LiButton.vue'

export default Vue.extend({
  name: 'LiHero',
  components: { LiButton },
})
</script>


<style>
  .hero {
    @apply flex justify-center items-center;
    @apply gap-x-16 py-24;
  }
</style>
