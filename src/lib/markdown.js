import { promises as fs } from 'fs'
import unified from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'
import extractFrontmatter from 'remark-extract-frontmatter'
import highlight from 'rehype-highlight'
import yaml from 'yaml'

const processor = unified()
  .use(parse)
  .use(gfm)
  .use(frontmatter)
  .use(extractFrontmatter, { yaml: yaml.parse })
  .use(remark2rehype)
  .use(highlight)
  .use(rehypeStringify)

export async function process(filename) {
  const { data: metadata, contents: content } = await processor.process(await fs.readFile(filename))
  return { metadata, content }
}