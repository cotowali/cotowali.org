# cotowali.org

## Development

### Requirements

- [pnpm](https://github.com/pnpm/pnpm)
- [z](https://github.com/zakuro9715/z)

### Setup

```
z install
```

#### Known messages

It's ok. Ignore them.

```
 WARN  deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
```

```
 ERROR  (node:2789) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

```
 WARN  Issues with peer dependencies found
.
└─┬ @nuxtjs/i18n 8.0.0-beta.3
  └─┬ vue-i18n-routing 0.8.1
    └─┬ @vue/composition-api 1.7.1
      └── ✕ unmet peer vue@">= 2.5 < 2.7": found 3.2.40 in nuxt
```

### Run DevServer on localhost:3000

```
z dev
```

### Generate as static website

```
z generate
```

## How to write documents (Outdated)

- `/contents/docs` - document root
    - `index.yaml` - metadata (Chapters, pages, etc)
    - `[chapter]/[slug].[locale].md` document content
        - title: page title
        - revison: document revision (yyyymmdd)

Read existing documents for more information

## TOOD: Nuxt3 Stable

rc -> stable

### Waiting update

- [google-fonts](https://github.com/nuxt-community/google-fonts-module/blob/main/package.json#L33)
- [tailwindcss](https://github.com/nuxt-modules/tailwindcss/blob/main/package.json#L29)

### Can update

- [i18n: 8.0.0-beta.6](https://github.com/nuxt-modules/i18n/blob/next/package.json#L78)
- [content: 2.2.2](https://github.com/nuxt/content/blob/main/package.json#L45)
- nuxt: 3.0.0
