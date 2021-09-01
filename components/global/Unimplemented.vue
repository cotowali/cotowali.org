<i18n>
{
  "en": {
    "default": "This feature is unimplemented."
  },
  "ja": {
    "default": "この機能は未実装です"
  }
}
</i18n>

<template>
  <Alert type="unimplemented">
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
  name: 'Unimplemented',
  data: (vm) => ({
    hasSlot: !!vm.$slots.default.map((v) => v.text.trim()).join(''),
  }),
}
</script>
