---
id: adjustments
title: Adjustments
layout: docs
category: Reference
permalink: docs/adjustments.html
next: shipments.html

---

## Overview

`Adjustments` help to track adjustments made to entities such as an `order`
or `line item`. Adjustments can be due to various reasons such as adding a
promotion, or adding taxes etc.

The adjustments table has a polymorphic relationship with the actions leading to
it. e.g. [Promotion Adjustments][promo-adj]

The adjustment model has the following attributes:

- `adjustable_type`: The type of adjustable for which adjustment is created
    it can be an `order` or a `line_item`.
- `adjustable_id`: The id of the adjustable for which the adjustment was
  created.
- `amount`: The amount for the adjustment it can be positive or negative
  depending on whether the amount has to be added or substracted from the
  adjustable total. e.g. it is negative in case of promotions and positive
  in case of taxes.
- `eligible`: This is used to check if the created adjustment should be
  considered while calculating totals for the adjustable. Adjustment which have
  `eligible` as true are only considered during the adjustable total
  calculations. This field is especially important while handling promotions.
  A promotion is considered applied if adjustments created due to it are
  eligible.
- `included`: This is used to assert whether, amount adjusted is already present
  in the adjustable total. In case it is false the amount should be considered
  during total computation.

## Adjustment Polymorphic Associations

### Promotion Adjustments
Adjustments play a very important role while applying promotions. They help
in tracking the entity for which the adjustment was created using
`adjustable_type` and `adjustable_id` and the `amount` which was added.

The `eligible` field is used to verify which adjustments are going to affect
the computations for an `order` or `line item`. Only those adjustments which
have `eligible` as true affect the calculation.

[promo-adj]: /docs/promotions.html#promotion-adjustments
