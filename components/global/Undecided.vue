<template>
  <Alert type="undecided">
    <template v-if="$slots.default.text.trim()">
      <slot />
    </template>
    <template v-else>
      <span>
        この機能の詳細は未決定です
      </span>
    </template>
  </Alert>
</template>
