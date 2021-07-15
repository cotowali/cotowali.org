import { promises as fs } from 'fs'
import yaml from 'yaml'
import { process } from '$lib/markdown'

export async function get({ params }) {
  const { tree } = params
  const { sections } = yaml.parse(await fs.readFile(`contents/${tree}/index.yaml`, 'utf-8'))
  const body = JSON.stringify(await Promise.all(
    sections.map(async (slug) => {
      const filename = `contents/${tree}/${slug}.md`
      const obj = await process(filename)
      obj.metadata.path = '/' + filename.replace(/\.md$/, '')
      console.log(obj)
      return obj
    }),
  ))
  return { body }
}
