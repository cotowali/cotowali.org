<i18n lang="json">
{
  "en": {
    "no longer maintained": "Cotowali is no longer maintained.",
    "thank you for support": "Thank you for your support during development."
  },
  "ja": {
    "no longer maintained": "Cotowali の開発は終了しました。",
    "thank you for support": "開発中のご支援に感謝します。ありがとうございました。"
  }
}
</i18n>
<template>
  <div>
    <section class="w-hero mx-auto">
      <LiHero />
    </section>
    <section class="bg-dark-darken-1 py-8">
      <Alert class="w-hero mx-auto">
        <div>{{ t('no longer maintained') }}</div>
        <div>{{ t('thank you for support') }}</div>
      </Alert>
      <div class="w-hero mx-auto bg-dark-darken-1">
        <LiSponsors />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>
