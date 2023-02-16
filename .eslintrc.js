module.exports = {
  extends: [
    '@cotowali/eslint-config/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
