<i18n>
{
  "en": {
    "default": "Details of this feature is undecided."
  },
  "ja": {
    "default": "この機能の詳細は未決定です"
  }
}
</i18n>

<template>
  <Alert type="undecided">
    <template v-if="hasSlot">
      <slot />
    </template>
    <template v-else>
      <span>
        {{ $t('default') }}
      </span>
    </template>
  </Alert>
</template>

<script>
export default {
  name: 'Undecided',
  data: (vm) => ({
    hasSlot: !!vm.$slots.default.map((v) => v.text.trim()).join(''),
  }),
}
</script>
