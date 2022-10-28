const baseUrl = 'https://cotowali.org'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
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

  i18n: {
    baseUrl,
    seo: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ja', iso: 'ja-JP', name: '日本語' },
    ],
    defaultLocale: 'en',
  },
})
