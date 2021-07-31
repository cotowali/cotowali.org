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
    <p>{{ $t('wip') }}</p>
    <slot />
  </Alert>
</template>
