# Testing and Assertion

## Assert Statement

`assert` takes a `bool` value. If `false`, immediately exit script with non-zero code.

```
assert(1 == 1)
assert(1 == 2) // assertion failed

println('unreachable')
```

`assert` takes a message as second argument desplayed when the assertion fails.

```
fn div(a: int, b: int): int {
  assert(b == 0, 'divide by zero')
  return a / b
}
```

## Testing function

A function have `#[test]` attribute is a testing function. Testing functions are compiled only in test-mode and skipped for normal compilation.

If an assertion fails within a test function, only that test will be terminated and other tests will run.

```
// test.li
namespace tests {
  #[test]
  fn test_fail() {
    assert(false)
  }

  #[test]
  fn test_ok() {
    assert(true)
  }
}
```

Use the `lic test` command to run tests.

```
lic test test.li
```

You run the above command, then you take the following results.

```
testing tests::test_fail ... FAILED
testing tests::test_ok ... OK

Output:
LINE 9: Assertion Failed

test result: FAILED
2 total; 1 passed; 1 failed;
```
