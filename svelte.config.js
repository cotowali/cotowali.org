import path from 'path'
import preprocess from "svelte-preprocess"
import adapterStatic from '@sveltejs/adapter-static'

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
          $components: path.resolve('./src/components')
        },
      }
    }
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
