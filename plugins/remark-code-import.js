const path = require('path')
const codeImport = require('remark-code-import')

// workaround to using remark-code-import on nuxt content

module.exports = (options = {}) => {
  const transform = codeImport(options)
  return (tree, file) => {
    file.path = path.resolve(__dirname, '../README.md') // dummy to avoid error
    file.dirname = path.resolve(__dirname, '../')
    transform(tree, file)
  }
}
