<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    return await fetch(`/contents/guides/${slug}.json`).then(async (r) => {
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
  export let entry
</script>

<h1>{entry.metadata.title}</h1>
{@html entry.content}
