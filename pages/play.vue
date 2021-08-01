<template>
  <div class="flex flex-col items-center w-full min-h-full pt-8 px-12 gap-y-2">
    <h1 class="text-4xl text-brand-red">Cotowali Playground</h1>
    <div class="self-start">
      <LiButton class="">
        Compile
      </LiButton>
    </div>
    <div class="flex w-full flex-grow">
      <div class="w-1/2">
        <textarea v-model="code" class="code-block rounded-bl text-black" />
      </div>
      <div class="w-1/2">
        <pre class="code-block rounded-r bg-black">
          <code class="w-full" />
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      code: "echo('hello cotowali')",
    }
  },
})
</script>

<style scoped>

.code-block {
  @apply block h-full w-full p-2;
}

</style>
