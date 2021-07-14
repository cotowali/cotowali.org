import { process, FaildToLoadError } from '$lib/markdown'

export async function get({ params }) {
  const { tree, slug } = params
  try {
    const { metadata, content } = await process(`contents/${tree}/${slug}.md`)
    const body = JSON.stringify({ metadata, content })
    return { body }
  } catch (e) {
    if (e instanceof FaildToLoadError) {
      return { status: 404, body: '"not found"' }
    }
    return { status: 500, body: 'internal error' }
  }
}
