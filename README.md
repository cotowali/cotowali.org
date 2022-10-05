# cotowali.org

## Development

### Requirements

- [pnpm](https://github.com/pnpm/pnpm)
- [z](https://github.com/zakuro9715/z)

### Setup

```
z install
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
