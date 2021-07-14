import path from 'path'
import fs from 'fs'
import preprocess from "svelte-preprocess"
import adapterStatic from '@sveltejs/adapter-static'

const src = path.resolve('./src')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#app',
    adapter: adapterStatic({
      pages: 'dist',
      assets: 'dist',
    }),

    vite: {
      resolve: {
        alias: {
          // $foo: src/foo
          ...Object.fromEntries(
            fs.readdirSync(src, { withFileTypes: true })
              .filter((f) => f.isDirectory())
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
