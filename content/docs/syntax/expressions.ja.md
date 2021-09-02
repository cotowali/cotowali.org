---
title: 式
revision: 0
---

## 演算子

### 算術演算子

### 比較演算子

## 外部コマンド呼び出し

`@command(arg1, arg2)` で外部コマンドを呼び出すことができます。戻り値は文字列です。

```
assert @expr('1', '+', '1') == '2'
assert ((1.1 |> @awk('{print $1 * 2}')) as float) == 2.2
```
