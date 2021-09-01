<template>
  <Alert type="undecided">
    <template v-if="hasSlot">
      <slot />
    </template>
    <template v-else>
      <span>
        この機能の詳細は未決定です
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
