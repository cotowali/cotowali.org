<script context="module">
  import { base } from '$app/paths'
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    const post = await fetch(`/contents/guides/${slug}.json`)
      .then((r) => r.json())
    return {
      props: { post }
    }
  }
</script>

<script>
  export let post
</script>

<h1>{post.metadata.title}</h1>
{@html post.content}
