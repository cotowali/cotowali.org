---
title: テストとアサーション
revision: 20210729
---

## Assert 文

Assert 文は bool 型の値を引数にとり、`false` だった場合はプログラムを異常終了します。

```
assert(1 == 1)
assert(1 == 2) // assertion failed

println('unreachable')
```

また、Assert 文の第2引数に文字列を与えることで、メッセージを表示できます。

```
fn div(a: int, b: int): int {
  assert(b == 0, 'divide by zero')
  return a / b
}
```

## テスト関数

`#[test]` 属性を付与することで、テスト関数を作成できます。テスト関数はテスト時のみコンパイルされ、通常のコンパイル時はスキップされます。

テスト関数内でアサーションに失敗した場合、そのテストのみが終了し、他のテストは通常通り実行されます。

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

テストを実行するには、`lic test` コマンドを使用します。

```
lic test test.li
```

上記のコマンドを実行すると、次のような結果が得られます。

```
testing tests::test_fail ... FAILED
testing tests::test_ok ... OK

Output:
LINE 9: Assertion Failed

test result: FAILED
2 total; 1 passed; 1 failed;
```
