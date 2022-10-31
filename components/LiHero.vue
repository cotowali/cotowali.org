<i18n lang="json">
{
  "en": {
    "description": "A statically typed scripting language that is transpiled into shell script",
    "get-started": "Get Started",
    "try": "Try"
  },
  "ja": {
    "description": "シェルスクリプトにコンパイルする静的型付きスクリプト言語"
  }
}
</i18n>

<template>
  <div class="hero">
    <div class="h-[240px] flex flex-col justify-between">
      <div>
        <h1 class="text-brand-red leading-none" style="font-size: 76px; margin: 65px 240px 0 -6px; ">
          <CotowaliLogoText />
        </h1>
        <div class="font-medium" style="font-size: 16px; margin-top: 0px;">
          <p>
            {{ t('description') }}
          </p>
        </div>
      </div>
      <div class="flex gap-x-4">
        <LiButton large :to="localePath('/docs/getting-started')">
          {{ t('get-started') }}
        </LiButton>
        <LiButton large dark-red :to="localePath('/play')">
          {{ t('try') }}
        </LiButton>
      </div>
    </div>
    <img src="~/assets/cotowali.svg" height="240px" width="240px" alt="cotowali">
  </div>
</template>

<script lang="ts">
export default {
  name: 'LiHero',
}
</script>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<style scoped>
.hero {
  @apply flex justify-center items-center;
  @apply gap-x-16 py-24;
}
</style>
