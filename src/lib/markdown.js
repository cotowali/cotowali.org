import vfile from 'to-vfile'
import unified from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'
import extractFrontmatter from 'remark-extract-frontmatter'
import highlight from 'rehype-highlight'
import yaml from 'yaml'

const parser = unified()
  .use(parse)
  .use(gfm)
  .use(frontmatter)
  .use(extractFrontmatter, { yaml: yaml.parse })

const runner = unified()
  .use(remark2rehype)
  .use(highlight)
  .use(rehypeStringify)

export function process(filename) {
  console.log(filename)
  const tree = parser.parse(vfile.readSync(filename))
  console.log(tree)
  let metadata = {}
  if (tree.childern.length > 0 && tree.children[0].type == 'yaml') {
    metadata = yaml.load(tree.children[0].value)
    tree.children = tree.children.slice(1, tree.children.length)
  }
  const content = runner.stringify(runner.runSync(tree))
  return { metadata, content }
}
