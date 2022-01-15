---
title: ビルトイン
revision: 20210114
---

<wip></wip>

## グローバル関数

### print

```
fn print(s: string)
```

文字列を標準出力に出力します。

### println(string)

```
fn println(s: string)
```

文字列を標準出力に改行とともに出力します。

### eprint

```
fn eprint(s: string)
```

文字列を標準エラー出力に出力します。

### eprintln

```
fn eprintln(s: string)
```

文字列を標準エラー出力に改行とともに出力します。

### isatty

```
fn isatty(fd: int): bool
```

指定されたファイルディスクリプタが tty か判別します。

### input

```
fn input(prompt: string): string
```

プロンプトを表示し、標準入力から入力を受け取ります。

### input_tty

```
fn input_tty(prompt: string): string
```

プロンプトを表示し、tty から入力を受け取ります。

### range

```
fn range(begin: int, end: int) |> int
```

指定された範囲の連続した数値のシーケンスを返します。

```
var v: int
for i in range(1, 4) {
  v += i
}
assert(v == 3)
```

## string

### head

```
fn ...string |> head(n: int) |> ...string
```

文字列シーケンスの先頭から、指定された個数の文字列を取り出します。

### first

```
fn ...string |> first() |> string
```

文字列シーケンスの最初の要素を返します。

### tail

```
fn ...string |> tail(n: int) |> ...string
```

文字列シーケンスの末尾から、指定された個数の文字列を取り出します。

### last

```
fn ...string |> last() |> string
```

文字列シーケンスの最後の要素を返します。

### string#substr

```
fn (s: string) substr(i: int, n: int): string
```

インデックス i から n 文字の部分文字列を返します。n がマイナス値の場合、i 以降の全体を返します。

### string#index

```
fn (s: string) index(t: string): int
```

指定された部分文字列が文字列内に含まれる場合、その最初のインデックスを返します。見つからなかった場合は `-1` を返します。

### string#last_index

```
fn (s: string) last_index(t: string): int
```

指定された部分文字列が文字列内に含まれる場合、その最後のインデックスを返します。見つからなかった場合は `-1` を返します。

### string#starts_with

```
fn (s: string) starts_with(ss: string): bool
```

文字列が指定された文字列から開始する場合に `true` を返します。

### string#ends_with

```
fn (s: string) ends_with(ss: string): bool
```

文字列が指定された文字列で終了する場合に `true` を返します。

### lines

```
fn string |> lines() |> ...string
```

文字列を行ごとのシーケンスに変換します。


### string#lines

```
fn (s: string) lines() |> ...string
```

文字列を行ごとのシーケンスに変換します。


### replace

```
fn ...string |> replace(old: string, new: string) |> ...string
```

文字列シーケンスの各要素を正規表現(ERE)で置換します。

### string#replace


```
fn (s: string) replace(old: string, new: string): string
```

文字列を正規表現(ERE)で置換します。

### filter

```
fn ...string |> filter(pat: string) |> ...string
```

文字列シーケンスから正規表現(ERE)にマッチする要素を抜き出します。


## UNIX commands

- `basename(string): string`
- `...string |> cat(...string) |> ...string`
- `cd(string)`
- `cp(...string)`
- `cp_r(...string)`
- `dirname(string): string`
- `exit(int)`
- `ls(...string) |> ...string`
- `mkdir(...string)`
- `mkdir_p(...string)`
- `pwd(): string`
- `rm(...string)`
- `rm_r(...string)`
- `seq(int) |> ...int`
- `touch(...string)`
- `which(string): string`
