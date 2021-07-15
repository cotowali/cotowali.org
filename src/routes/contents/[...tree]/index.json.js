import { promises as fs } from 'fs'
import yaml from 'yaml'
import { process } from '$lib/markdown'

export async function get({ params }) {
  const { tree } = params
  const { sections } = yaml.parse(await fs.readFile(`src/contents/${tree}/index.yaml`, 'utf-8'))
  const body = JSON.stringify(await Promise.all(
    sections.map(async (slug) => {
      const path = `contents/${tree}/${slug}`
      const obj = await process(`src/${path}.md`)
      obj.metadata.path = path
      return obj
    }),
  ))
  return { body }
}
