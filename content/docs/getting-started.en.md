# Getting Started

::alert
<span class="vertical-middle">
Cotowali is no longer maintained.
</span>
::

## Setup

You can install Cotowali with [Konryu](https://github.com/cotowali/konryu) that is written in Cotowali itself。

Run the following commands. Then commands `konryu`, `lic` and `lish` will be available.

```
curl -sSL https://konryu.cotowali.org | sh
# Add following codes to your shell config like .bashrc
# export PATH="$HOME/.konryu/bin:$PATH"
# eval "$(konryu init)"
```

If setup successfully. You will see `Hello World` with the following command.

```
echo 'println("Hello World")' | lic run
```
