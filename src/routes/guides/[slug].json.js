import { process } from '../../lib/markdown'

export function get({ params }) {
  const { slug } = params
  const { metadata, content } = process(`src/pages/guides/${slug}.md`)
  const body = JSON.stringify({ metadata, content })
  return { body }
}
