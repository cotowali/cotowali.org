<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    return await fetch(`/contents/docs/${slug}.json`).then(async (r) => {
      if (!r.ok) {
        return { status: r.status, error: new Error(r.status === 404 ? 'Not Found' : 'Faild to load') }
      }
      const entry = await r.json()
      return {
        props: { entry },
      }
    })
  }
</script>

<script>
  import Page from '$components/Page.svelte'
  export let entry
</script>

<Page>
  <nav slot='sidenav'>sidenav</nav>
  <h1>{entry.metadata.title}</h1>
  {@html entry.content}
</Page>
