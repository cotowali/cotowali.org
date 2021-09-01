---
title: 関数
revision: 0
---

## 基本

関数は以下のように定義します。

```
fn add(a: int, b: int) int {
  return a + b
}
assert add(1, 2) == 3

fn assert_zero(v: int) {
  assert v == 0
}
assert_zero()
```

## パイプライン

関数はパイプライン入力を持つことができます。入力は `read` 関数を使用して受け取ります。

<undecided>パイプライン入力の受け取り方法は変更される可能性があります</undecided>

可読性のために、戻り値の型の前に `|>` を記述することができます。この記述は動作に一切影響を与えません。

```
fn int |> inc() |> int {
  var n
  read(&n)
  return n + 1
}

fn (int, int) |> add_in() |> int {
  var (a, b): (int, int)
  read(&a, &b)
  return a + b
}
```

