---
title: Functions
revision: 20220311
---

## Basic

You can use functions like following.

```
fn add(a: int, b: int): int {
  return a + b
}
assert add(1, 2) == 3

fn assert_zero(v: int) {
  assert v == 0
}
assert_zero()
```

### Variadic arguments

A last argument can be variadic. Type of variadic argument is array.

```
fn sum(vals: ...int): int {
  var ret = 0
  for v in vals {
    ret += v
  }
  return ret
}

assert sum(1, 2, 3) == 6
```

## Pipeline

Function can take pipeline input. There are two ways to receive pipeline input: as a parameter or using `read` function.

To readability, you can use `|>` instead of `:`. This is just a difference in notation and does not affect functionality.

```
fn (n: int) |> inc() |> int {
  return n + 1
}

fn (int, int) |> add_in() |> int {
  var (a, b): (int, int)
  read(&a, &b)
  return a + b
}

assert (1 |> inc()) == 2
assert ((1, 2) |> add_in) == 3
```

### Sequence

If pipeline input of function is a sequence type, `read` sets one element at a time. If the input reaches the end, `read` returns `false`.
If return type of function is a sequence type, you can use `yield` to return element of sequence. `yield` don't terminate function.

```
fn ...int |> twice_each() |> ...int {
  var n int
  while(read(&n)) {
    yield n * 2
  }
}

fn ...int |> sum() |> int {
  var ret = 0
  var v int
  whire read(&v) {
    ret += v
  }
  return ret
}

assert (seq(3) |> twice_each() |> sum()) == 12
```
