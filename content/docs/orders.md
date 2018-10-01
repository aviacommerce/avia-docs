---
id: orders
title: Orders
layout: docs
category: Reference
permalink: docs/orders.html
next: users.html
---

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
   can be in different states depending on the user interaction with the cart and
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
- `shipping_address`: This field depicts the address to which the order should be
  shipped. Scroll to address section to know more.

It has following relationships:
 - _has many_ `payments`: An order can be paid through one or more payment methods.
  The order model has been designed in such a manner so as to support partial
  payments through multiple methods. This is usually required when the stores have
  wallet which can be used for making payments and any balance amount after using
  the store credits can be made through other payment methods.
 - _has many_ `packages`: An order can have multiple packages created under a set of rules.
  To know more about the rules and `package` entity, see the packages section.
 - _has many_ `line_items`: An order can have one or more `lineitems` depending on the
  the purchases made by the user. See line item section for more info.

Modules Responsible for handling business logic for `order` model.
- [`Snitch.Data.Schema.Order`][2]: Defines the order schema.
- [`Snitch.Data.Model.Order`][3]: Handles the CRUD functions for order model.
- [`Snitch.Domain.Order`][4]: Exposes Calculation and other important functions.
- [`Snitch.Domain.Order.Transitions`][5]: Exposes Transition function for order state
  transitions.
- [`Snitch.Domain.Order.DefaultMachine`][6]: The order state machine to handle state
   transitions.

## LineItems
  A line item in the order context refers to an item of a particular product.
  They are kind of a link between the `order` and `product`s with additional information
  in terms of purchase made.

  Line Item model fields.
  - `quantity`: The field tells about the number of items of a particular type.
  - `unit_price`: The price of an item for that particular product.

  Line Item relationships:
  - _belongs to_ `product`
  - _belongs to_ `order`

  The line item model uses `quantity` field to maintain item consolidation so that,
  a new item added for already existing line item should not be added as a new line
  item and only the quantity should be updated.

## Order States
  The order during the checkout flow goes through a series of states. It begins
  with the `order` in the `cart` state and ends at the `completed` state. The different
  states of the order are:
  - `cart`
  - `address`
  - `delivery`
  - `payment`
  - `confirmed`
  - `completed`

  To move from one state to another the order has to meet certain conditions.
  The `order` can be moved from one state to another using the exposed API call.
  A successful transition puts the order in the next state, whereas an unsuccessful
  one keeps the order in the same state and returns an error message.
  To See the APIs for the transitions see, [Checkout API Flow][7].

  To know more about the `states` see [_order state_ _machine_][8].

## Addresses
An order has two different addresses associated with it:
- Shipping Address
- Billing Address
Both these addresses have their own significance.

### Billing Address
The billing address of an order is connected with the payment method used for
making the purchase. It is used to identify an authorized use of the card. It is
also where the bill for the purchase is sent.
The AVS(Address Verification System) employed by online merchants to identify
any fraud related to the payment made is also based on the billing address used.

### Shipping Address
The shipping address refers to the address to which `packages` of this order
would be sent to.
The `shipping cost` for the order is calculated based on the `zone` the
`shipping address` falls into. Also, if the merchant has multiple stock location
from which the package can be shipped, then the `stock location` from which the
`package` would be sent is selected based on the shipping address.

## Packages
`Packages` aka `shipments` are the actual shippable entities of an order. Once
 the order is marked in the `confirmed` state, further actions happen on `packages`
 of the order. The `packages` also go through a series of state changes based on
 the admin action. The main states of a package are:
 - `pending`
 - `ready`
 - `shipped`
 - `delivered`
 To know more about `packages` see, [Packages][9]

## Payments
- Multiple payments for the order
- Link to the payments detail.


[1]: https://github.com/ai/nanoid
[2]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/order.ex
[3]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/order.ex
[4]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/domain/order/order.ex
[5]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/domain/order/transitions.ex
[6]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/domain/order/default_machine.ex
[7]: /docs/checkouts-api.html
[8]: /docs/order-states.html
[9]: /docs/shipments.html
