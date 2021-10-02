<template>
  <div v-if="isTargetLocale">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Locale',
  props: {
    ja: { type: Boolean },
    en: { type: Boolean },
  },
  computed: {
    targetLocale(): string {
      return (
        this.ja
          ? 'ja'
          : this.en
            ? 'en'
            : ''
      )
    },
    isTargetLocale(): boolean {
      return this.$i18n.locale === this.targetLocale
    },
  },
})
</script>
