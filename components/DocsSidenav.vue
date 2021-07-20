<template>
  <div class="pr-40 min-h-full shadow">
    <nav class="fixed w-40 pt-6">
      <ul>
        <li v-for="page in pages" :key="page.slug">
          <DocsSidenavItem class="px-6" :page="page" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Index, Page } from '@/lib/content'

export default Vue.extend({
  name: 'DocsSidenav',
  data: () => ({ pages: [] as Page[] }),
  async fetch() {
    const index = await this.$content('docs', 'index').fetch<Index>() as Index
    const slugs = index.pages.map((v) => [v, this.$i18n.locale].join('.'))
    const slugIndex = Object.fromEntries(slugs.map((slug, i) => [slug, i]))
    this.pages = await this.$content('docs')
      .where({ slug: { $in: slugs }})
      .fetch<Page>() as Page[]
    this.pages = this.pages.map((page) => ({ ...page, path: page.path.split('.')[0] }))
    this.pages.sort((a, b) => slugIndex[a.slug] - slugIndex[b.slug])
  },
})
</script>
