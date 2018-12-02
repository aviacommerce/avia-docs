---
id: common-errors
title: Common Errors
permalink: docs/common-errors.html
next: products.html
---

List of frequent errors during installation of Aviacommerce.

## Compilation Errors

### Hosted Payment Controller

```
Compilation error in file
lib/snitch_api_web/controllers/hosted_payment_controller.ex
== ** (CompileError)
lib/snitch_api_web/controllers/hosted_payment_controller.ex:174:
invalid literal nil in <<>>
```

#### Solution

A fresh installation of Aviacommerce requires the user to set up environment variables from the sample file included in the repository. Failing to do so causes `hosted_payment_controller` to throw an exception during compile time.

``` bash
cp env/example.env env/local.env
source env/local.env
```
