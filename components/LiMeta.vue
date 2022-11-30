<template>
  <Head>
    <Link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Montserrat:wght@700&family=Source+Code+Pro&display=swap"
    />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;500;700&display=swap"
    />
  </Head>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
})

const description = t('cotowali.description')
const name = t('cotowali.name')
const title = name + (route.meta.title && ` - ${ route.meta.title }}` || '')
useHead({
  title,
  htmlAttrs: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    lang: i18nHead.value.htmlAttrs!.lang,
    prefix: 'og: http://ogp.me/ns#',
  },
  link: (i18nHead.value.link || []).concat([
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ]),
  meta: (i18nHead.value.meta || []).concat([
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    { name: 'format-detection', content: 'telephone=no' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:site_name', property: 'og:site_name', content: name },
    { hid: 'og:title', property: 'og:title', title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: route.fullPath },
    { hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/cotowali/design/main/assets/cotowali.png' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
  ]),
})
</script>
