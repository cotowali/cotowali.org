# ソースコード

## ファイル名

cotowali のソースコードのファイル名に必須の制約はありませんが、拡張子に `.li` を使用するのを推奨します。

## エントリーポイント

cotowali のソースコードは上から順番に実行され、エントリーポイント関数はありません。もし必要な場合、以下のようにして疑似的なエントリーポイントを実現できます。

```
fn main() {
  echo('hello')
}

main()
```

## ファイルの読み込み

他のファイルを読み込むためには `require` を使用します。これはコンパイル時に解決される点で  `source` コマンドと異なります。

```
// math.li
fn add(a int, b int) int {
  return a + b
}

// main.li
require './math.li'
assert add(1, 1) == 2
```

### リモートファイル読み込み

`require` では `http`, `https` 及び `github` を使用して、リモートファイルを読み込めます。

`http` 及び `https` では url を指定します。`github` の場合は `require 'github:user/repo@ref/path'` のように指定します。`ref` は省略できません。

```
// https
require 'https://raw.githubusercontent.com/cotowali/cotowali/main/examples/hello_world.li'

// github
require 'github:cotowali/cotowali@main/examples/hello_world.li'
```

### チェックサム検証

`require` にはチェックサムを指定できます。チェックサムを指定した場合、読み込み対象のファイルが正しいチェックサムを持つことをコンパイル時に検証します。チェックサムのアルゴリズムには `md5`, `sha1` および `sha256` が使用できます。

```
require 'github:cotowali/cotowali@main/tests/empty.li' {
  md5   : 'd41d8cd98f00b204e9800998ecf8427e',
  sha1  : 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
}
```
