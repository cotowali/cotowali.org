---
title: Source Code
revision: 20210731
---

## Extension

`.li` is strongly reccommended. But it is not forced.

## Entrypoint

Cotowali script is executed from top to bottom. Cotowali don't have entorypoint but you can use a virtual entrypoint as follows.

```
fn main() {
  echo('hello')
}

main()
```

## Load files

You can use `require` to load other files. `require` differs from `source` command in it is resolved at compile-time.

```
// math.li
fn add(a int, b int) int {
  return a + b
}

// main.li
require './math.li'
assert add(1, 1) == 2
```

### Load remote files

`require` supports load files from `http`, `https` and `github`.

Use a raw url for `http` and `https`. Use a special url like `require 'github:user/repo@ref/path'` for `github`. `ref` cannot be omitted.

```
// https
require 'https://raw.githubusercontent.com/cotowali/cotowali/main/examples/hello_world.li'

// github
require 'github:cotowali/cotowali@main/examples/hello_world.li'
```

### Checksums

You can use `require` with checksums。If one or more checksums are specified, checksums of the target file is verified at compile-time.

Cotowali supports `md5`, `sha1` antd `sha256` as a checksum algorithm.

```
require 'github:cotowali/cotowali@main/tests/empty.li' {
  md5   : 'd41d8cd98f00b204e9800998ecf8427e',
  sha1  : 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
}
```
