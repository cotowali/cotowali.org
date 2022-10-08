// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Lexend: [400, 700],
      'M PLUS 1p': [400, 500, 700],
      Montserrat: [700],
      'Source Code Pro': [400],
    },
  },
})
