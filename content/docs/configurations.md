---
id: configurations
title: Configurations
layout: docs
category: Reference
permalink: docs/configurations.html
next: inventory.html
prev: shipments.html
---

## Overview

The `Configurations` in Aviacommerce is there to make configuration decisions and customize the store according to the admin. These general settings set up the store with initial basic info like store’s name, its metadata, the standard currency it uses, including mailer configuration details like sender mail and sendgrid API key to send emails on behalf of the store.

The important attributes of [`GeneralConfiguration`][1] model are:

- `name`: the title of the store.
- `meta description`: describes the store and how it's different from other e-commerce stores of it's kind.
- `meta keywords`: list of comma separated values to provide information about the store.
- `seo title`: a value to be assigned to the default SEO title field. SEO stands for "Search Engine Optimization" which is to enhance the store's visibility in the web search engine's results.
- `sender mail`: email id to be used for the store.
- `sendgrid api key`: sendgrid key to avail the email sending service provided by sendgrid.
- `currency`: the default currency for our store.

Modules for handling the business logic of the general configuration model :
- [`Snitch.Data.Schema.GeneralConfiguration`][1]: Defines the `general configuration` schema.
- [`Snitch.Data.Model.GeneralConfiguration`][2]: Handles the CRUD functions.

[1]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/general_configuration.ex

[2]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/general_configuration.ex
