const title = 'Cotowali'
const description = 'Cotowali is a staticaly typed script language that transpile into POSIX sh'
const baseUrl = 'https://cotowali.web.app' // FIXME: set production domain

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
    baseUrl,
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
