---
title: シェルスクリプト統合
revision: 20211113
---

## リダイレクト

リダイレクトにはパイプライン演算子 `|>` および追記パイプライン演算子 `|>>` を使用します。

```
println('Hello World') |> 'out.txt'  // Write to out.txt
println('Hello World') |>> 'out.txt' // Append to out.txt
```

## 外部コマンド呼び出し

外部コマンドの直接呼出しは `@cmd(arg1, arg2, ...)` のように記述します。シグネチャは `any |> (...any) |> string` です。

```
assert @expr('1', '+', '1') == '2'
assert ((1.1 |> @awk('{print $1 * 2}')) as float) == 2.2
```

Cotowali は外部コマンド呼び出しの安全性を保障しません。外部コマンド呼び出しは実行時エラーとなる可能性を常に伴い、ポータビリティを損ねる要因となるため、最低限の利用にとどめることを推奨します。
