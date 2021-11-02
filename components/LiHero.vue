<i18n>
{
  "en": {
    "description": "A statically typed script language that transpile into POSIX sh",
    "get-started": "Get Started",
    "try": "Try"
  },
  "ja": {
  }
}
</i18n>

<template>
  <div class="hero">
    <div class="flex flex-col">
      <h1 class="text-brand-red text-4xl">
        <CotowaliLogoText />
      </h1>
      <div class="mt-1" style="padding-left: 3px;">
        <p>
          {{ $t('description') }}
        </p>
      </div>
      <div class="mt-5 flex gap-x-4">
        <LiButton large :to="localePath('/docs/getting-started')">
          {{ $t('get-started') }}
        </LiButton>
        <LiButton large dark-red :to="localePath('/play')">
          {{ $t('try') }}
        </LiButton>
      </div>
    </div>
    <img src="~/assets/cotowali.svg" height="240px" width="240px" alt="cotowali">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiHero',
})
</script>


<style scoped>
.hero {
  @apply flex justify-center items-center;
  @apply gap-x-16 py-24;
}
</style>
