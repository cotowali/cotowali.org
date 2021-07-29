<i18n>
{
  "en": {
    "alert": "alert"
  },
  "ja": {
    "alert": "注意"
  }
}
</i18n>

<template>
  <div class="alert">
    <LiIcon class="alert-icon" :icon="icon" :aria-label="iconLabel" />
    <div class="alert-content">
      <slot />
    </diV>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiAlert } from '@mdi/js'

const typeDataMap: {
  [key: string]: {
    icon: string
  }
} = {
  alert: {
    icon: mdiAlert,
  },
}

export default Vue.extend({
  name: 'DocsAlert',
  props: {
    type: {
      type: String,
      default: 'alert',
      validator: (v) => Object.keys(typeDataMap).includes(v),
    },
  },
  data() {
    return {
      ...typeDataMap[this.type],
      iconLabel: this.$t(this.type),
    }
  },
})
</script>

<style scoped>
.alert {
  @apply flex items-start;
  @apply p-4 my-4;
  @apply bg-red-300 text-red-600;
  @apply border-2 border-current;
  @apply rounded;
}

.alert-icon {
  @apply flex-shrink-0;
}

.alert-content {
  @apply flex-grow;
  @apply ml-2;
}
</style>
