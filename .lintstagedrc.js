module.exports = {
  '*.{js,ts,vue}': [
    'npm run lint:fix',
  ],
  '*.ja.md': [
    'npm run lint:docs:ja',
  ],
  '*.en.md': [
    'npm run lint:docs:en',
  ],
}
