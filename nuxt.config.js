const title = 'Cotowali'
const description = 'Cotowali is a staticaly typed scripting language that transpile into POSIX sh'
const baseUrl = 'https://cotowali.org'

export default {
  target: 'static',

  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    title: 'Cotowali',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', propety: 'og:type', content: 'website' },
      { hid: 'og:site_name', propety: 'og:site_name', content: 'Cotowali' },
      { hid: 'og:title', propety: 'og:title', content: title },
      { hid: 'og:description', propety: 'og:description', content: description },
      { hid: 'og:url', propety: 'og:url', content: baseUrl },
      { hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/cotowali/design/main/assets/cotowali.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },

  build: {
    parallel: true,
    cache: true,
  },

  components: true,

  generate: {
    fallback: true,
  },

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
      'M PLUS 1p': [400, 500, 700],
      Montserrat: [700],
      'Source Code Pro': [400],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/firebase',
    'nuxt-i18n',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
      },
      remarkPlugins: ['~/plugins/remark-code-import.js'],
    },
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyB9kRgqc6K3N6b2oX-N9QfQTZGD86uguaU',
      authDomain: 'cotowali.firebaseapp.com',
      projectId: 'cotowali',
      storageBucket: 'cotowali.appspot.com',
      messagingSenderId: '156438306367',
      appId: '1:156438306367:web:e1e6e0081397104f26a28a',
      measurementId: 'G-5P9SZXBNXN',
    },
    services: {
      analytics: true,
    },
  },

  i18n: {
    baseUrl,
    seo: false,
    vueI18nLoader: true,
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
}
