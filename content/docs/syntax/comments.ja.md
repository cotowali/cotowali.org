---
title: コメント
version: 20210728
---

Cotowali のコメントは C スタイルです。`// comment` 形式の行コメントと、`/* comment */` 形式のブロックコメントが使用できます。

## 行コメント

行コメントは `//` ではじまり、行末までがコメントとして扱われます。

```
// comment
echo('line comment') // comment
```

## ブロックコメント

ブロックコメントは `/*` `*/` で囲まれた範囲がコメントとして扱われます。これは入れ子にできます。また、改行を含むこともできます。

ブロックコメント中の行コメントは単なる文字列として扱われ、行末より前に `*/` が現れた場合、コメントはその場所で終了します。

```
/* comment */

/* multi
 * line
 * comment
 */

echo(/* inline comment */ 'hello inline comment')

/* // line comment in block comment */ echo('this is not a comment')
```
