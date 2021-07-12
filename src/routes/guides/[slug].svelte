<script context="module">
  import { base } from '$app/paths'
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    console.log(slug)
    const text = await fetch(`${base}/guides/${slug}.json`).then((r) => r.text())
    console.log(text)
    const post = await fetch(`${base}/guides/${slug}.json`)
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
