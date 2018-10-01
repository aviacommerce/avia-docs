---
id: checkouts
title: Order Checkout API
layout: docs
category: Reference
permalink: docs/checkouts-api.html

---

## Context
This section deals with the order state transitions during checkout.
To advance an `order` state request needs to be made to the respective
API.
The sections below explain the complete flow of the order from `cart` state
to `confirmed` state.
To sum up one directional flow in short, the order goes through the following states:

`cart` --> `address` --> `delivery` --> `payment` --> `confirmed`

To know more about order state transitions See [_Order State Machine_][1].

### Blank Order

A blank order order is created for a signed in user by making a call to get
current order for a user. See [Current Order](/docs/orders-api.html#current-order).

In case the user is not signed in, an order is created when a call is made to add
the first line item. See [Add Line Item](/docs/line-items-api.html).

### Add Line Item
To add line items to the order created. See [Add Line Item](/docs/line-items-api.html).

### Add Address

### Save Shipping Preferences

### Save Payment Method

### Make Payment


[1]: docs/order-states.html
