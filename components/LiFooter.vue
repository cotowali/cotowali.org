<template>
  <footer class="footer">
    <p>Copyright &copy; zakuro &lt;z@kuro.red&gt;</p>
    <p>Design by zakuro &amp; Yuki Amane (Pianoforte)</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LiFooter',
})
</script>

<style scoped>
.footer {
  @apply text-center text-2xs;
  @apply p-4;
}
</style>
