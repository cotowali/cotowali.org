---
title: コンパイラディレクティブ
revision: 20211116
---

コンパイラディレクティブはコンパイラに指示を与え、そのふるまいを変更します。

## コンパイラシンボル

コンパイラシンボルはコンパイラディレクティブで使用できるシンボルです。

`#define` ディレクティブを使用すると、シンボルを定義できます。

```
#define one 1
#define v one // 定義済みのシンボルを値として使用できます

#define no  false
#define ok  // 値を省略した場合、true になります
```

`#undef` ディレクティブを使用すると、シンボルを削除できます。

```
#undef var
```

### コマンドライン引数での定義

コンパイラシンボルは、コマンドライン引数 `-d <name>=[<value>]` を使用して定義できます。`<value>` を省略した場合は `true` になります。

### 定義済みコンパイラシンボル

下記のコンパイラシンボルはデフォルトで定義されています。

| シンボル名         | 値 |
| ------------------ | -- |
|`sh`                | sh バックエンドの場合 true |
|`pwsh` `powershell` | powershell バックエンドの場合 true |

## 条件付きコンパイル

`#if` `#else` `#endif` ディレクティブを使用して、条件付きコンパイルを行えます。

```
#if sh
  println('sh backend')
#else
  println('non-sh backend')
#fi
```

### 条件式

`#if` ディレクティブの条件式には、`&&`, `||` 及び `!` が使用できます。

```
#if !(a && b || c)
#endif
```

## エラーと警告

`#error` ディレクティブでコンパイルエラーを、`#warning` ディレクティブで警告を生成できます。

```
#if pwsh
  #error PowerShell backend is not supported.
#endif
```

```
#if pwsh
  #warning PowerShell backend is experimental.
#endif
```
