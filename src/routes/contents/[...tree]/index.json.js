import { promises as fs } from 'fs'
import yaml from 'yaml'
import { process } from '$lib/markdown'

export async function get({ params }) {
  const { tree } = params
  const { pages } = yaml.parse(await fs.readFile(`src/contents/${tree}/index.yaml`, 'utf-8'))
  const body = JSON.stringify(await Promise.all(
    pages.map(async (slug) => {
      const path = `${tree}/${slug}`
      const obj = await process(`src/contents/${path}.md`)
      obj.metadata.path = path
      return obj
    }),
  ))
  return { body }
}
