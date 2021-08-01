<template>
  <div class="flex flex-col items-center w-full h-full pt-8 px-12 gap-y-2">
    <h1 class="text-4xl text-brand-red">Cotowali Playground</h1>
    <div class="self-start">
      <LiButton @click="compile">
        Compile
      </LiButton>
    </div>
    <div class="flex w-full flex-grow flex-shrink">
      <div class="w-1/2">
        <textarea v-model="code" class="code-block rounded-bl text-black" />
      </div>
      <div class="w-1/2">
        <pre class="code-block rounded-r bg-black"><code class="w-full">{{ outputBoxContent }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Status = 'active' | 'compiling' | 'error'

export default Vue.extend({
  data() {
    return {
      code: "echo('hello cotowali')",
      output: '',
      status: 'active' as Status,
    }
  },
  computed: {
    outputBoxContent(): string {
      if (this.status === 'compiling') {
        return 'Compiling... Wait a minute'
      } else if (this.status === 'error') {
        return 'ERROR! Reload your brouwser'
      }
      return this.output
    },
  },
  methods: {
    async compile() {
      this.status = 'compiling'
      await this.$nextTick()

      this.output = await fetch('https://lic-cotowali.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: this.code,
      }).then(async (r) => {
        this.status = 'active'
        return await r.text()
      }).catch(() => {
        this.status = 'error'
      }) || 'ERROR'
    },
  },
})
</script>

<style scoped>

.code-block {
  @apply block h-full w-full p-2;
  @apply overflow-x-scroll;
}

</style>
