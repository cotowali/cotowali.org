---
title: Control Flow
revision: 20220311
---

## Conditions

### If / Else 文

`if` statement evaluates a condition, if true, execute the first block.
if false, evaluate `else if` conditions in order, first block whose condition is true is executed.
If all conditions are false, `else` block is executed.
`else` and `else if` blocks can be omitted.

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

`()` is not required for conditions. But `(expr)` is a valid expression. so conditions with `()` work.

```
var n = 1
if n == 1 {
  echo("it works")
}
if (n == 1) {
  echo("it also works")
}
```

Conditions must be `bool`.

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

## Loops

### for-in statement

`for in` statement execute a block for each items of a enumerable value.

```
var n = 0
for v in [1, 2, 3] {
    n += v
}
assert(n == 6)
```

### while statement

`while` statement execute a block until condition is no longer true.

```
var i = 0
while i < 10 {
  i += 1
}
assert(i == 10)
```

### continue / break statement

You can use `continue` to go back to the beggining of current loop.

You can use `break` to exit current loop immediately.

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

`continue` and `break` apply to the innermost loop.


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

