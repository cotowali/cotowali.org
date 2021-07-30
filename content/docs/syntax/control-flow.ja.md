---
title: 制御構文
revision: 20210701
---

## If 文

条件分岐には `if` 文を使用します。`if` 文は条件式を評価し、真であればブロックを実行します。`if` の後には `else if` を記述できます。条件式が偽の場合は続く `else if` の条件式を順番に評価し、その条件式が真の場合はブロックを実行します。すべての条件式が偽の場合、`else` が記述されていれば、そのブロックを実行します。

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
  echo("it works without ()")
}
if (n == 1) {
  echo("it works with ()")
}
```

また、条件式の型は `bool` でなければなりません。

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

## For 文

<docs-wip></docs-wip>

```
for v in arr {
    // ...
}
```
