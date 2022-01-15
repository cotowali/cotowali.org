---
title: ビルトイン
revision: 20210114
---

<wip></wip>

## グローバル関数

### `print(string)`

文字列を標準出力に出力します。

### `println(string)`

文字列を標準出力に改行とともに出力します。

### `eprint(string)`

文字列を標準エラー出力に出力します。

### `eprintln(string)`

文字列を標準エラー出力に改行とともに出力します。

### `isatty(int): bool`

指定されたファイルディスクリプタが tty か判別します。

### `input(string): string`

プロンプトを表示し、標準入力から入力を受け取ります。

### `input_tty(string): string`

プロンプトを表示し、tty から入力を受け取ります。

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
