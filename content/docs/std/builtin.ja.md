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
