<i18n>
{
  "en": {
    "wip": "Work In Progress"
  },
  "ja": {
    "wip": "執筆中"
  }
}
</i18n>

<template>
  <Alert>
    <span class="mt-1">{{ $t('wip') }} :</span>
    <slot />
  </Alert>
</template>
