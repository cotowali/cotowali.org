---
title: 型
revision: 0
---

## 組み込み型

### 整数型

整数型 `int` は 64 ビット符号付き整数を表します。

#### リテラル

整数リテラルは以下のように記述します。

```
var zero = 0
var one = 1
var n = 65535
```

### 浮動小数点数型

浮動小数点数型 `float` は環境依存の精度を持つ浮動小数点数を表します。

#### リテラル

浮動小数点数リテラルは以下のように記述します。

```
var zero = 0.0
var n = 1.5
var big = 1.0+e9
var small = 1.0-E9
```

### 真偽値型

真偽値型 `bool` は `true` または `false` を表します。

#### リテラル

真偽値リテラルは `true` と `false` です。

```
var b1 = true
var b2 = false
```

### 文字列型

文字列型 `string` は文字列を表します。

#### リテラル

文字列リテラルにはシングルクォートリテラル, ダブルクォートリテラル, 及び raw リテラルがあります。文字列リテラルには改行を含むことができます。

##### シングルクォートリテラル

シングルクォートリテラルは、`\\` と `\'` を除いて文字列の解釈は行われません。

```
echo('abc')  // => abc
echo('\r\n') // => \r\n
echo('\'\\') // => '\
```

##### ダブルクォートリテラル

ダブルクォートリテラルでは、エスケープシーケンス、式展開、変数展開が有効になります。

###### 変数展開

`$var` と記述すると、文字列に変数を埋め込みます。

###### 式展開

`${expr}` と記述すると、式を評価した結果を文字列に埋め込みます。式には任意の式を使用できます。

```
var n = 40
var foo = 'foo'
echo("answer: ${ n + 2 }")     // => answer: 42
echo("${ "${ n + 2 } $foo" }") // => 42 foo
```

##### raw リテラル

`r` プレフィックスを付けた文字列リテラルは raw 文字列リテラルです。raw 文字列リテラル内では、一切の解釈は行われません。

```
assert r'\\' == '\\\\'
assert r"\n" == "\\\n"
```

### タプル型

タプル型 `(Type1, Type2, ...)` は複数の値を組み合わせた値を表します。タプル型とシーケンス型以外の任意の型を要素として使用できます。

タプル内で `...` を使用することでタプルを展開できます。エイリアスされたタプルにも適用可能です。

```
var int3: (...(int, int), int)
assert typeof(int3) == '(int, int, int)'

type int_pair = (int, int)
var int4 = (...int_pair, ...int_pair)
assert typeof(int4) == '(int, int, int, int)'
```

#### リテラル

タプルリテラルは以下のように記述します。

```
var int_pair: (int, int) = (10, 20)
```

### 配列型

配列型 `[]Type` は任意長の要素を持つ配列を表します。

#### リテラル

配列リテラルには `[v1, v2, ...]` と `[]Type{len: n, init: v}` の 2つの記述方法があります。前者の記法では少なくとも1つの要素含む必要があります。

```
var arr1 = [1, 1, 1]
var arr2 = []int{len: 3, init: 1}
assert(arr1 == arr2)
```

### マップ型

マップ型 `map[KeyType]ValueType` はキーと値のペアのコレクションを表します。

#### リテラル

マップリテラルは以下のように記述します。いずれの記述方法でも同じ値が得られます。

```
var map1 = { 'key': 'value' }
var map2 = map{ 'key': 'value' }
var map3 = map[string]string{ 'key: 'value' }
```

## 型エイリアス

`type TypeName = TargetType` で型エイリアスを定義できます。

```
type Vec2 = (int, int)
var v: Vec2 = (1, 2)
```

### メソッド

型に対してメソッドを定義できます。レシーバ以外は[通常の関数](./functions)と同様です。レシーバは値であり、レシーバを変更しても元の変数は変更されません。

```
type Num = int
fn (n: Num) twice(): Num {
  return n * 2
}

var two: Num = 2
assert(two.twice().twice() == 4)
```

### 演算子オーバーロード

型に対して二項演算子および単項演算子のオーバーロードができます。

```
type Vec2 = (int, int)

fn (lhs: Vec2) + (rhs: Vec2): Vec2 {
  return (lhs[0] + rhs[0], lhs[1] + rhs[1])
}

fn (v: Vec2) * (n: int): Vec2 {
  return (v[0] * n, v[1] * n)
}

fn -(v: Vec2): Vec2 {
  return v * -1
}

var v1: Vec2 = (1, 2)
var v2: Vec2 = (2, 1)
assert(v1 + v2 == (3, 3))
assert(v1 * 2 == (2, 4))
assert(-v1 == (-1, -2))
```
