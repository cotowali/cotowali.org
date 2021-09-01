---
title: 制御構文
revision: 20210701
---

## If / Else 文

`if` / `else` 文は条件分岐を行います。

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

## For

### For In 文

`for in` は列挙可能値の反復処理を行います。

```
var n = 0
for v in [1, 2, 3] {
    n += v
}
assert n == 6
```
