---
title: 制御構文
revision: 20210701
---

## 条件分岐

### If / Else 文

`if` は与えられた条件式を評価し、真であればブロックを実行します。
偽の場合は後続の `else if` の条件式を順番に評価し、最初に真であるブロックを実行します。
すべての条件が偽の場合、`else` ブロックを実行します。`else` ブロックは省略可能です。

```
fn fizzbuzz(n int) string {
  if n % 3 == 0 && n % 5 == 0 {
    return 'fizzbuzz'
  } else if n % 3 == 0 {
    return 'fizz'
  } else if n % 5 == 0 {
    return 'buzz'
  } else {
    return n as string
  }
}

assert fizzbuzz(1) == '1'
assert fizzbuzz(3) == 'fizz'
assert fizzbuzz(5) == 'buzz'
assert fizzbuzz(15) == 'fizzbuzz'
```

`if` 文の条件式を `()` で囲う必要はありませんが、`(expr)` は正しい式であるため、`()` で囲っても動作します。

```
var n = 1
if n == 1 {
  echo("it works")
}
if (n == 1) {
  echo("it also works")
}
```

条件式の型は `bool` でなければなりません。

```
var n = 1

// OK
if n != 0 {
  echo(n)
}

// Error
if n {
  echo(n)
}
```

## 反復処理

### For In 文

`for in` は列挙可能値の反復処理を行います。

```
var n = 0
for v in [1, 2, 3] {
    n += v
}
assert n == 6
```
