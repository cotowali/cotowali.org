<template>
  <div class="relative" @mouseleave="showLanguageList = false">
    <LiButton
      small
      circle
      icon
      @mouseenter="showLanguageList = true"
    >
      <LiIcon
        aria-label="switch-language"
        :icon="mdiTranslate"
      />
    </LiButton>
    <ul v-show="showLanguageList" class="absolute right-0 bg-brand-red w-24">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code"
        class="w-full"
      >
        <LiButton red class="w-full" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </LiButton>
      </li>
    </ul>
  </div>
</template>

<script>
import { mdiTranslate } from '@mdi/js'

export default {
  name: 'LiLanguageSwitcher',
  data: () => ({
    mdiTranslate,
    showLanguageList: false,
  }),
}
</script>
