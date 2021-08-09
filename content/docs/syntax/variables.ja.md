---
title: 変数
revision: 20210729
---

## 宣言と代入

変数は `var` を使用して宣言し、`=` を使用して代入します。

初期化式を指定した場合は型を省略することができ、その場合の変数の型は初期化式から自動的に決定されます。初期化式を指定しない場合、変数の値はデフォルト値になります。

<unimplemented>
  初期化式と型の両方を指定する構文は未実装です。
</unimplemented>

```
var s = 'value'
assert typeof(s) == 'string'

var i int
assert i == 0

var n int = 10
assert n == 10 && typeof(n) == 'int'
n = n + 1
assert n == 11
```

## 同名の変数

内側のスコープでは外側のスコープと同名の変数を宣言できます。この場合、外側のスコープの同名の変数は参照できません。また、同じスコープ内で同名の変数を複数回宣言することはできません。

```
var v int = 1
{
  var v string
  assert typeof(v) == 'string'
}
assert typeof(v) == 'int'

/* ERROR
var v string
*/
```
