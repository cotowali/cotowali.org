# ShellScript Integration

## Redirection

You can use pipeline operator, `|>` and appending pipeline operator, `|>>`

```
println('Hello World') |> 'out.txt'  // Write to out.txt
println('Hello World') |>> 'out.txt' // Append to out.txt
```

## Calling command

You can call external command directly like `@cmd(arg1, arg2, ...)`。The signature of calling command is `any |> (...any) |> string` です。

```
assert @expr('1', '+', '1') == '2'
assert ((1.1 |> @awk('{print $1 * 2}')) as float) == 2.2
```

:alert{type="portability"}

## glob literal

You can use glob literals like `@"*.txt"`. Single-quoted and double-quoted are supported. Double-quoted glob literals support expansions as well as string literals.

```
var files = @"*.txt"
assert(typeof(files) == '[]string')
println(files.join(''))
```

If a glob literal is used for a variadic argument or an argument to an external command call, it will behave as multiple expanded values, not as an array.

```
cat(@'*.txt') // cat('a.txt', 'b.txt', ...)

@cat(@'*.txt') // @cat('a.txt', 'b.txt', ...)
               // sh { cat *.txt }
```

## Integrated Inline ShellScript

The `sh` block allows you to write shell scripts directly in the cotowali source code. This is called integrated inline shell-script.

```
sh {
  echo 'this is shell script'
}
```

You can refer variables that are defined in cotowali context in `sh` block.
This allows cotowali variables to be used or updated.

```
var s = 'cotowali'
sh {
  echo $%s   # print 'cotowali'
  %s="shell" # update variable
}
assert(s == 'shell') // updated in inline shell
```

:alert{type="portability"}
