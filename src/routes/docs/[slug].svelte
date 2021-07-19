<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    return await fetch(`/contents/docs/${slug}.json`).then(async (r) => {
      if (!r.ok) {
        return { status: r.status, error: new Error(r.status === 404 ? 'Not Found' : 'Faild to load') }
      }
      const entry = await r.json()
      const entries = await fetch(`/contents/docs`).then((r) => r.json())
      return {
        props: { entry, entries },
      }
    })
  }
</script>

<script>
  import Page from '$components/Page.svelte'
  import Sidenav from './_Sidenav.svelte'
  export let entry
  export let entries
</script>

<Page>
  <Sidenav slot='left' {entries} />
  <article class="p-12">
    <h1 class="title">{entry.metadata.title}</h1>
    {@html entry.content}
  </article>
</Page>

<style>
  .title {
    @apply text-3xl text-brand-red font-black;
    @apply pb-2;
    @apply border-b-2;
  }
</style>
