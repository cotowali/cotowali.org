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
