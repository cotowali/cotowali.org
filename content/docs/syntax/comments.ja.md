---
title: コメント
revision: 20210729
---

Cotowali のコメントは C スタイルです。`// comment` 形式の行コメントと、`/* comment */` 形式のブロックコメントが使用できます。

## 行コメント

行コメントは `//` ではじまり、行末までがコメントとして扱われます。


```
// comment
echo('line comment') // comment
```

## ブロックコメント

ブロックコメントは `/*` `*/` で囲まれた範囲がコメントとして扱われます。ブロックコメントには改行を含むことができ、ブロックコメント内にネストしたブロックコメントを記述できます。

```
/* comment */

/* multi
 * line
 * comment
 */

echo(/* inline comment */ 'hello inline comment')
```

## 異なる記法の混在

コメント内に現れた他のコメントは、ネストされたブロックコメントの場合を除いて、単なるコメント文の一部として扱われます。

つまり、行コメントに `/*` が含まれていてもコメントは行末で終了し、ブロックコメントに `//` が含まれていても、行末ではなく `*/` で終了します。

```
// /*
echo('not a comment')
// */

/* // line comment in block comment */ echo('not a comment')
```

## ドキュメントコメント

ドキュメントコメントは `///` で始まるコメントであり、生成物にコメントとして出力されます。通常のコメントは単に削除されます。

```
/// doc comment (This will be retain to output)

// Normal comment will be removed
```
