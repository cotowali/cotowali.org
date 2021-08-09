const merge = require('deepmerge')
const base = require('./.textlintrc.base.js')

module.exports = merge(base, {
  rules: {
    'preset-ja-technical-writing': true,
    'ja-technical-writing/ja-no-redundant-expression': {
      dictOptions: {
        dict2: { disabled: true },
      },
    },
    'ja-technical-writing/max-kanji-continuous-len': {
      allow: ['浮動小数点数', '浮動小数点数型'],
    },
  },
})
