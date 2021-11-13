---
title: 変数
revision: 20211113
---

## 宣言と代入

変数は `var` を使用して宣言し、`=` を使用して代入します。

```
var x: int = 42
x = x * 42
```

型の指定を省略した場合、型は初期化式から推論されます。

```
var s = 'value'
assert(typeof(s) == 'string')
```

初期化式を省略した場合はデフォルト値で初期化されます。

```
var n: int
assert(n == 0)
```

初期化式と型の少なくとも一方は指定する必要があります。

```
var n // ERROR
```

### 分割代入

タプル使用することで、複数の変数の宣言と分割ができます。

```
var (a, b): (int, int) = (1, 2)
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
