---
id: orders
title: Orders
layout: docs
category: Reference
permalink: docs/orders.html

---

Sample doc for Orders

## Overview
The order model is a key entity which tracks sales and possible returns. It acts
as a central entity to handle purchases made by the user, and gives the admin a way
to manage received orders.

The order model has following attributes:
- `number`: The order number field uniquely identifies the order. At present it
   is generated using [nanoid][1]. The order number is available to both the user
   and the admin and can be used to address any grievances. To get the order details
   `Snitch.Model.Order.get/1` can be used with the `order_number` as params.
- `state`: This field helps in identifying the current state of the order. An order
   can be in different states depending on the user inteaction with the cart and
   the checkout process. To know more about different states of the `order`, see
   `OrderState Machine`.
- `special instructions`: This field is mainly for admin to add any special action
    to be performed or some note to the order.
- `inserted_at`: Field identifies the timestamp at which order was created for the first
   time.
- `updated_at`: Field gives timestamp when the order has been updated with any new
   information.
- `billing_address`: This field relates to information regarding the address which
   is connected with the specific form of payment for this order. Scroll to address
   section to know more.
- `shipping_address`: This field depics the address to which the order should be
  shipped. Scroll to address section to know more.

It has following relationships:
 - _has many_ `payments`: An order can be paid through one or more payment methods. The
   order model has been designed in such a manner so as to support partial payments through
  multiple methods. This is usually required when the stores have wallet which can be used
  for making payments and any balance amount after using the store credits can be made
  through other payment methods.
 - _has many_ `packages`: An order can have multiple packages created under a set of rules.
  To know more about the rules and `package` entity, see the packages section.
 - _has many_ `line_items`: An order can have one or more `lineitems` depending on the
  the purchases made by the user. See line item section for more info.

Modules Responsible for handling business logic for `order` model.
- `Snitch.Data.Schema.Order`: Defines the order schema.
- `Snitch.Data.Model.Order`: Handles the CRUD functions for order model.
- `Snitch.Domain.Order`: Exposes Calculation and other important functions.
- `Snitch.Domain.Order.Transitions`: Exposes Transition function for order state transitions.
- `Snitch.Domain.Order.DefaultMachine`: The order state machine to handle state
   transitions.

## LineItems
- What are line items.
- Significance of line_items inside order.
- Mention Item Consolidation.

## Order State Machine
- How the default machine works?
- If it's possible to override the default order machine.
- Mention of the different states of the order
- Link to Order state machine in Advanced Topics.

## Addresses
An order has two different addresses associated with it:
- Shipping Address
- Billing Address
Both these addresses have their own significances.

### Billing Address
The billing addrress of an order is connected with the payment method used for making the purchase. It is used to identify an authorized use of the card. It is also where the bill for the purchase is sent.
The AVS(Address Verrification System) employed by online merchants to identify any fraud related to the payment made is also based on the billing address used.

### Shipping Address
The shipping address refers to the address to which `packages` of this order would be sent to.
The `shipping cost` for the order is calculated based on the `zone` the `shipping address` falls into.
Also, if the merchant has multiple stock location from which the package can be shipped, then the `stock location` from which the `package` would be sent is selected based on the shipping address.

## Packages
- Why the need of packages inside order.
- A small overview of packages.
- Link to packages detail.

## Payments
- Multiple payments for the order
- Link to the payments detail.


[1]: https://github.com/ai/nanoid
