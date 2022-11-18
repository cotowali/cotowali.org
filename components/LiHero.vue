<i18n lang="json">
{
  "en": {
    "get-started": "Get Started",
    "try": "Try"
  },
  "ja": {
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
          <p>
            {{ t('cotowali.description') }}
          </p>
        </div>
      </div>
      <div class="flex gap-x-4">
        <LiButton
          large
          :to="localePath('/docs/getting-started')"
          class="w-48"
        >
          {{ t('get-started') }}
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
  @apply gap-x-16 py-24;
}
</style>
