---
title: 関数
revision: 20220311
---

## 基本

関数は以下のように定義します。

```
fn add(a: int, b: int): int {
  return a + b
}
assert(add(1, 2) == 3)

fn assert_zero(v: int) {
  assert(v == 0)
}
assert_zero(0)
```

### 可変長引数

関数は末尾に配列型の可変長引数を持つことができます。

```
fn sum(vals: ...int): int {
  var ret = 0
  for v in vals {
    ret += v
  }
  return ret
}

assert(sum(1, 2, 3) == 6)
```

## パイプライン

関数はパイプライン入力を持つことができます。パイプライン入力の受け取り方には、パラメータとして受け取る方法と、`read` 関数を使用する方法があります。

可読性のために、戻り値の型の前の `:` の代わりに `|>` を記述することができます。この記述は動作に一切影響を与えません。

```
fn (n: int) |> inc() |> int {
  return n + 1
}

fn (int, int) |> add_in() |> int {
  var (a, b): (int, int)
  read(&a, &b)
  return a + b
}

assert((1 |> inc()) == 2)
assert(((1, 2) |> add_in()) == 3)
```

### シーケンス型

シーケンス型の入力を持つ関数では、`read` は値を1つづつ受け取ります。入力が終端に達した場合、`read` は `false` を返します。
シーケンス型の戻り値を持つ関数では、`yield` 文を使用してひとつづつ要素を返します。

```
fn ...int |> twice_each() |> ...int {
  var n: int
  while read(&n) {
    yield n * 2
  }
}

fn ...int |> sum() |> int {
  var ret = 0
  var v: int
  whire read(&v) {
    ret += v
  }
  return ret
}

assert((seq(3) |> twice_each() |> sum()) == 12)
```
