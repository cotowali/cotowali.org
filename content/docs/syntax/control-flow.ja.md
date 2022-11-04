---
title: 制御構文
revision: 20220311
---

## 条件分岐

### if / else 文

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

assert(fizzbuzz(1) == '1')
assert(fizzbuzz(3) == 'fizz')
assert(fizzbuzz(5) == 'buzz')
assert(fizzbuzz(15) == 'fizzbuzz')
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

### for-in 文

`for-in` は列挙可能値の反復処理を行います。

```
var n = 0
for v in [1, 2, 3] {
    n += v
}
assert(n == 6)
```

### while 文

`while` は条件を満たす間、反復処理を行います。

```
var i = 0
while i < 10 {
  i += 1
}
assert(i == 10)
```

### continue / break 文

`continue` は現在のループを中断し、ループの先頭に戻ります。

`break` は現在のループを終了します。

```
for i in [1, 2, 3, 4, 5] {
  if i > 3 {
    break
  }
  if i % 2 == 0 {
    continue
  }
  assert(i <= 3 && i % 2 == 1)
}
```

`continue` と `break` は、最も内側のループに対して適用されます。

```
var n = 0
for v in [1, 2, 3] {
  while true {
    break
    assert(false)
  }

  n += v
}
assert(n == 6)
```
