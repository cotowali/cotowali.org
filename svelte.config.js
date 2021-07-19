import path from 'path'
import fs from 'fs'
import preprocess from "svelte-preprocess"
import adapterVercel from '@sveltejs/adapter-vercel'

const src = path.resolve('./src')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#app',
    adapter: adapterVercel(),

    vite: {
      resolve: {
        alias: {
          // $foo: src/foo
          ...Object.fromEntries(
            fs.readdirSync(src, { withFileTypes: true })
              .filter((f) => f.isDirectory())
              .filter((f) => f.name !== 'lib') // $lib is handled by svelte kit
              .map((f) => ['$' + f.name, path.join(src, f.name)]),
          ),
        },
      },
    },
  },

  preprocess: [preprocess({
    "postcss": true,
  })],
}

export default config
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV
const dev = mode === "development"
process.env.TAILWIND_MODE = dev ? "watch" : "build"
