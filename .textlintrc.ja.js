const merge = require('deepmerge')
const base = require('./.textlintrc.base.js')

module.exports = merge(base, {
  rules: {
    'preset-ja-technical-writing': true,
  },
})
