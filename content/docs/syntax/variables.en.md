---
title: Variables
revision: 20211113
---

## Declarations and Assignments

Variables are declared using `var` and assigned using `=`.

```
var x: int = 42
x = x / 2
assert(x == 21)
```

If no type is specified, the type is inferred.


```
var s = 'value'
assert(typeof(s) == 'string')
```


A variable declared without assignment are initialized with default value.

```
var n: int
assert(n == 0)
```

You must specify the type or assign value.

```
var n // ERROR
```

### Destructuring Assignment

Cotowali supports multiple variables declaration and destructuring assignment using tuple.

```
var (a, b): (int, int) = (1, 2)
assert a == 1 && b == 2
(a, b) = (b, a)
assert a == 2 && b == 1
```
