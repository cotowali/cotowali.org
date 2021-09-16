---
title: 変数
revision: 20210729
---

## 宣言と代入

変数は `var` を使用して宣言し、`=` を使用して代入します。

初期化式を指定した場合は型を省略することができ、その場合の変数の型は初期化式から自動的に決定されます。初期化式を指定しない場合、変数の値はデフォルト値になります。

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

### 分割代入

タプル使用することで、複数の変数の宣言と分割ができます。

<unimplemented>
  分割代入の型チェックは未実装です
</unimplemented>

<unimplemented>
  複数の変数の宣言は未実装です
</unimplemented>

```
var (a, b) = (1, 2)
assert a == 1 && b == 2
(a, b) = (b, a)
assert a == 2 && b == 1
```

### 同名の変数

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
