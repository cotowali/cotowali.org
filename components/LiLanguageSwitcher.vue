<template>
  <div
    class="relative"
    @mouseenter="isLanguageListVisible = true"
    @mouseleave="isLanguageListVisible = false"
  >
    <LiButton
      small
      circle
      icon
    >
      <LiIcon
        aria-label="switch-language"
        :icon="mdiTranslate"
      />
    </LiButton>
    <ul
      v-show="isLanguageListVisible"
      class="absolute right-0 bg-brand-red w-24"
    >
      <li
        v-for="l in locales"
        :key="l.code"
        class="w-full"
      >
        <LiButton
          red
          class="w-full"
          :to="switchLocalePath(l.code)"
        >
          {{ l.name }}
        </LiButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { mdiTranslate } from '@mdi/js'

const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isLanguageListVisible = ref(false)
</script>
