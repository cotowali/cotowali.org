<i18n>
{
  "en": {
    "alert": "alert",
    "unimplemented": "unimplemented"
  },
  "ja": {
    "alert": "注意",
    "unimplemented": "未実装"
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
import { mdiAlert, mdiTrafficCone } from '@mdi/js'

const icons: { [key: string]: string } = {
  alert: mdiAlert,
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
      icon: icons[this.type],
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

.alert-content p {
  @apply mt-0 mb-1;
}
</style>
