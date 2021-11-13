<i18n>
{
  "en": {
    "alert": "alert",
    "info": "info",
    "bug": "bug",
    "portability": "portability alert",
    "undecided": "undecided",
    "unimplemented": "unimplemented",

    "defaultTexts": {
      "portability": "Use of this feature will compromise portability.",
      "undecided": "Details of this feature is undecided."
    }
  },
  "ja": {
    "alert": "注意",
    "info": "補足",
    "bug": "バグ",
    "portability": "ポータビリティアラート",
    "undecided": "未決定",
    "unimplemented": "未実装",

    "defaultTexts": {
      "portability": "この機能の利用はポータビリティを損ねます。",
      "undecided": "この機能の詳細は未決定です"
    }
  }
}
</i18n>

<template>
  <div class="alert" :class="[color]">
    <LiIcon class="alert-icon" :icon="icon" :aria-label="iconLabel" />
    <div class="alert-content">
      <template v-if="hasSlot">
        <slot />
      </template>
      <template v-else>
        <span>
          {{ defaultText }}
        </span>
      </template>
    </diV>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiAlert,
  mdiInformation,
  mdiBug,
  mdiArrowDecision,
  mdiTrafficCone,
} from '@mdi/js'

const icons: { [key: string]: string } = {
  alert: mdiAlert,
  info: mdiInformation,
  bug: mdiBug,
  portability: mdiAlert,
  undecided: mdiArrowDecision,
  unimplemented: mdiTrafficCone,
}

export default Vue.extend({
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'alert',
      validator: (v) => Object.keys(icons).includes(v),
    },
  },
  data() {
    return {
      hasSlot: !!(this.$slots.default ?? []).map((v) => ((v.tag ?? '') + (v.text ?? '')).trim()).join(''),
      icon: icons[this.type],
      iconLabel: this.$t(this.type),
      color: this.type === 'info' ? 'blue' : 'red',
    }
  },
  computed: {
    defaultText() {
      return this.$t(`defaultTexts.${this.type}`)
    },
  },
})
</script>

<style scoped>
.alert {
  @apply flex items-start;
  @apply p-4 my-4;
  @apply border-2 border-current;
  @apply rounded;
}

.alert.red {
  @apply bg-red-300 text-red-600;
}

.alert.blue {
  @apply bg-blue-300 text-blue-600;
}

.alert-icon {
  @apply flex-shrink-0;
}

.alert-content {
  @apply flex-grow;
  @apply ml-2;
}

.alert-content p {
  @apply mt-0 mb-1;
}
</style>
