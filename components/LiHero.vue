<i18n lang="json">
{
  "en": {
    "get-started": "Get Started",
    "taika": "Taika Program"
  },
  "ja": {
    "get-started": "はじめる",
    "taika": "タイカ計画"
  }
}
</i18n>

<template>
  <div class="hero">
    <div class="h-[240px] flex flex-col justify-between">
      <div>
        <h1
          class="text-brand-red leading-none"
          style="font-size: 76px; margin: 65px 240px 0 -6px;"
        >
          <CotowaliLogoText />
        </h1>
        <div
          class="font-medium"
          style="font-size: 16px; margin-top: 0px;"
        >
          <p class="w-[480px]">
            {{ t('cotowali.description') }}
          </p>
        </div>
      </div>
      <div class="flex gap-x-2">
        <LiButton
          :to="localePath('/docs/getting-started')"
          class="w-48"
        >
          {{ t('get-started') }}
        </LiButton>
        <LiButton
          :to="localePath('/taika-program')"
          class="mw-32"
          dark-red
        >
          {{ t('taika') }}
        </LiButton>
      </div>
    </div>
    <img
      src="~/assets/cotowali.svg"
      height="240"
      width="240"
      alt="cotowali"
    >
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<style scoped>
.hero {
  @apply flex justify-center items-center;
  @apply py-24;
}
</style>
