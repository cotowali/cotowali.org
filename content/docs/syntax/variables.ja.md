---
title: 変数
version: 20210729
---

## 変数宣言

変数は `var` を使用して宣言します。構文は以下の通りです。

```
var 変数名 型 = 初期化式
```

初期化式を指定した場合型を省略でき、その場合は変数の型は自動的に決定されます。初期化式を指定しない場合、変数の値はデフォルト値になります。

初期化式と型は少なくとも片方を指定する必要があります。また、初期化式と型の両方を指定した場合は型を一致させなければなりません。

<docs-unimplemented>
  初期化式と型の両方を指定する構文は未実装です。
</docs-unimplemented>

```
var s = 'value'     // type will be string
var i int           // initialized by zero

var n int = 'value' // Error
var x               // Error
```

### シャドーイング

内側のスコープでは外側のスコープと同名の変数を宣言できます。この場合、外側のスコープの同名の変数は参照できません。また、同じスコープ内での同名の変数宣言はできません。

```
var v int = 1
{
  var v string
  assert typeof(v) == 'string'
}
assert typeof(v) == 'int'

var v string // Error
```


## 代入

`=` を使用して変数に値を代入できます。変数は宣言済みのものでなければなりません。また、異なる型の値は代入できません。

```
n = 0 // Error: undefined variable
var n int
n = 10
n = 'string' // Error: mismatched types
```
