<template>
  <div class="flex flex-col items-stretch w-full h-full pt-8 px-12 gap-y-2">
    <h1 class="text-4xl text-brand-red">Cotowali Playground (experimental)</h1>
    <textarea v-model="code" class="code-block rounded-bl text-black" />
    <div class="self-start flex gap-x-2">
      <LiButton @click="compile">
        Compile
      </LiButton>
      <div class="flex items-center bg-black rounded w-full overflow-hidden">
        <LiButton plain class="!rounded-r-none" icon @click="copyCliCommand">
          <LiIcon size="1rem" :icon="mdiCopy" aria-label="copy cli command" />
        </LiButton>
        <pre class="px-1"><code>{{ cliCommandBase }} "..."</code></pre>
      </div>
    </div>
    <pre class="code-block rounded-r bg-black"><code>{{ outputBoxContent }}</code></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiContentCopy as mdiCopy } from '@mdi/js'

type Status = 'active' | 'compiling' | 'error'

export default Vue.extend({
  data() {
    return {
      mdiCopy,
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
    escapedCode(): string {
      const pattern = /["$\\]/g
      const replacer = (s: string) => s === '\n' ? ';' : '\\' + s
      return this.code.replaceAll(pattern, replacer)
    },
    cliCommandBase(): string {
      return 'curl https://lic-cotowali.herokuapp.com/ -X POST -d'
    },
    cliCommand(): string {
      return `${this.cliCommandBase} "${this.escapedCode}"`
    },
  },
  methods: {
    async copyCliCommand() {
      await navigator.clipboard.writeText(this.cliCommand)
    },
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
  @apply block min-h-64 w-full p-2 rounded;
}

</style>
