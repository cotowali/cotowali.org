const merge = require('deepmerge')
const base = require('./.textlintrc.base.js')

module.exports = merge(base, {
  rules: {
    'preset-ja-technical-writing': true,
    'ja-no-redundant-expression': {
      dictOptions: {
        dict2: { disabled: true },
      },
    },
  },
})
