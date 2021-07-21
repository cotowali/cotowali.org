import u from 'unist-builder'

export default (code, _language, { _lineHighlights, _fileName }, { h, node }) => h(node, 'pre', {}, [
  h(node, 'code', [u('raw', code)]),
])
