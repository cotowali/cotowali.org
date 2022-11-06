const baseUrl = 'https://cotowali.org'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    //'@nuxtjs/google-fonts', // not work (@3.0.0-1)
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],

  /*
  googleFonts: {
    display: 'swap',
    families: {
      Lexend: [400, 700],
      'M PLUS 1p': [400, 500, 700],
      Montserrat: [700],
      'Source Code Pro': [400],
    },
  },
  */

  i18n: {
    baseUrl,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'ja', file: 'ja.json', iso: 'ja-JP', name: '日本語' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
    },
  },
})
