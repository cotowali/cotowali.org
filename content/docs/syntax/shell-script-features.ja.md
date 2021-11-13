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

## glob リテラル

glob リテラルは特殊な文字列配列であり、`@"*.txt"` のように記述します。シングルクォートまたはダブルクォートが使用でき、それぞれ文字列リテラルと同様に解釈や変数展開等が行われます。

```
var files = @"*.txt"
assert(typeof(files) == '[]string')
println(files.join(''))
```

可変長引数と外部コマンド呼び出しの引数に glob リテラルを使用した場合、配列ではなく展開された複数の値としてふるまいます。

```
cat(@'*.txt') // cat('a.txt', 'b.txt', ...)

@cat(@'*.txt') // @cat('a.txt', 'b.txt', ...)
               // sh { cat *.txt }
```

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
