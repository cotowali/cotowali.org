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

<alert type="portability"></alert>

## 統合インラインシェルスクリプト

`sh` ブロックを使用することで、ソースコード内にシェルスクリプトを直接記述できます。これを統合インラインシェルスクリプトと呼びます。

```
sh {
  echo 'this is shell script'
}
```

統合インラインシェルスクリプトでは、`%var` で cotowali の変数名を使用することができます。これにより、cotowali の変数の値を参照したり、更新したりできます。

```
var s = 'cotowali'
sh {
  echo $%s   # print 'cotowali'
  %s="shell" # update variable
}
assert(s == 'shell') // updated in inline shell
```

<alert type="portability"></alert>
