---
title: ソースコード
revision: 20210731
---

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
