export default {
  target: 'static',

  head: {
    title: 'Cotowali',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Cotowali is a staticaly typed script language that transpile into POSIX sh',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },

  components: true,

  plugins: [
    '@/plugins/vue-scrollactive',
    '@/plugins/docs',
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Lexend: [400, 700],
      Montserrat: [700],
    },
  },

  modules: [
    '@nuxt/content',
    'nuxt-i18n',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
      },
    },
  },

  i18n: {
    seo: false,
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'ja', iso: 'ja-JP' },
    ],
    defaultLocale: 'en',
  },
}
