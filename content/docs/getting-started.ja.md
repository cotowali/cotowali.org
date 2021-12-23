---
title: はじめる
revision: 20211203
---

## インストール

Cotowali のインストールには、Cotowali 自身で書かれたバージョンマネージャ [Konryu](https://github.com/cotowali/konryu) を使用します。
下記のコマンドを実行し表示される指示に従うと、lic コマンド(lic)、lish コマンド(REPL) が利用できます。

```
curl -sSL https://konryu.cotowali.org | sh
# 以下を .bashrc 等に追加ます
# export PATH="$HOME/.konryu/bin:$PATH"
# eval "$(konryu init)"
```

正常にインストールが完了し、PATH を正しく通していれば、以下のコマンドで Hello World が実行できます。

```
echo 'println("Hello World")' | lic run
```
