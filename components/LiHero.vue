<i18n>
{
  "en": {
    "description": "A statically typed script language that transpile into POSIX sh",
    "get-started": "Get Started",
    "try": "Try"
  },
  "ja": {
    "get-started": "はじめる"
 }

}
</i18n>

<template>
  <div class="hero">
    <div class="flex flex-col">
      <h1 class="text-brand-red text-4xl">Cotowali</h1>
      <div class="mt-1" style="padding-left: 3px;">
        <p>{{ $t('description') }}</p>
      </div>
      <div class="mt-5 flex gap-x-4">
        <LiButton size="large" class="bg-brand-red hover:bg-brand-red-lighten-1" :to="localePath('/docs/getting-started')">
          {{ $t('get-started') }}
        </LiButton>
        <LiButton size="large" class="bg-brand-dark-red hover:bg-brand-dark-red-lighten-1" href="/playground">
          {{ $t('try') }}
        </LiButton>
      </div>
    </div>
    <img src="~/assets/cotowali.svg" class="h-60">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiHero',
})
</script>


<style>
  .hero {
    @apply flex justify-center items-center;
    @apply gap-x-16 py-24;
  }
</style>
