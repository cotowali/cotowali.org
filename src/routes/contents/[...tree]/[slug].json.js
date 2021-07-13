import { process } from '$lib/markdown'

export async function get({ params }) {
  const { tree, slug } = params
  const { metadata, content } = await process(`contents/${tree}/${slug}.md`)
  const body = JSON.stringify({ metadata, content })
  return { body }
}
