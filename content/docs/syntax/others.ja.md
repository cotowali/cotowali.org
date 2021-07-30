---
title: その他
revision: 20210729
---

## assert 文

assert 文は bool 型の式をとり、評価して偽だった場合にプログラムを即座に終了します。

将来的には assert 文を削除するオプションが導入される可能性もあります。そのため、asset 文に渡す式の内部で副作用を発生させるべきではありません。

```
assert 1 == 1 // OK
assert 1 == 0 // exit with non-zero
echo('this will never be executed')
```
