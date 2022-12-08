# Comments

Cotowali's comments are basically C-style.

## Line comments

A line comment starts with `//` and ends with EOL.

```
// comment
echo('line comment') // comment
```

## Block comments

A block comment is between `/*` and `*/`. It can be multiline and nested.

```
/* comment */

/* multi
 * line
 * /* nested */
 * comment
 */

echo(/* inline comment */ 'hello inline comment')
```

## Documment comments

A line comment starts with `///` is a document comment. It will remain in the output as comments.

```
/// doc comment (This will remain in the output)

// This will be removed
```

## Mixed comments

Comments in a comment are part of comment text, except nested block comments.

This means that if a line comment contains `/*`, the comment will be terminate at EOL, and if a block comment contains `//`, it will terminate at `*/`, not at EOL.

```
// /*
println('not a comment')
// */

/* // A line comment in block comment. */ println('not a comment')
```
