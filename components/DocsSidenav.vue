<template>
  <div class="pr-40 min-h-full shadow">
    <nav class="fixed w-40 pt-6">
      <ul>
        <li v-for="page in pages" :key="page.slug">
          <div class="px-6">
            <nuxt-link :to="page.path" class="hover:underline">{{ page.title }}</nuxt-link>
            <ul v-if="page.toc.length > 0" class="px-2">
              <li v-for="link of page.toc" :key="link.id">
                <nuxt-link :to="page.path + '#' + link.id" class="hover:underline">{{ link.text }}</nuxt-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DocsSidenav',
  data: () => ({ pages: []}),
  async fetch() {
    const index = await this.$content('docs', 'index').fetch()
    const slugIndex = Object.fromEntries(index.pages.map((slug, i) => [slug, i]))
    this.pages = await this.$content('docs')
      .where({ slug: { $in: index.pages }})
      .fetch()
    this.pages.sort((a, b) => slugIndex[a.slug] - slugIndex[b.slug])
  },
}
</script>
