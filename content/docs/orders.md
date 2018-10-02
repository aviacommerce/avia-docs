---
id: orders
title: Orders
layout: docs
category: Reference
permalink: docs/orders.html
next: users.html
---

## Overview
The order model is a key entity which tracks purchases made by customers on AviaCommerce
and possible returns. It gives the admin a way to manage received orders.

The order model has following attributes:
- `number`: It uniquely identifies the order. At present it
   is being generated using [nanoid][1]. The order number is available to both the user
   and the admin and can be used to address any grievances. To get the order details
   `Snitch.Model.Order.get/1` can be used with the `order_number` as params.
- `state`: It helps in identifying the current state of the order. An order
   can be in different states depending on the user interaction throughout the checkout process.
   To know more about different states of the `order`, see section
   [`Order States`][10].
- `special instructions`: It is mainly for admin to add any special action
    to be performed or add some note to the order.
- `inserted_at`: It identifies the timestamp at which order was created for the first
   time.
- `updated_at`: It the gives timestamp when the order has been updated with any new
   information.
- `billing_address`: It relates to information regarding the address which
   is connected with the specific form of payment for this order. See the [Address][11]
   section to know more.
- `shipping_address`: This field depicts the address to which the order should be
  shipped. Scroll to [Address][11] section to know more.

It has following relationships:
 - **_has many_** `payments`: An order can be paid through one or more payment methods.
  The order model has been designed in such a manner so as to support partial
  payments through multiple methods. This is usually required when the stores have
  wallet which can be used for making payments and any balance amount after using
  the store credits can be made through other payment methods.
 - **_has many_** `packages`: An order can have multiple packages created under a set of rules.
  To know more about the rules and `package` entity, see the [Packages][12] section.
 - **_has many_** `line_items`: An order can have one or more `lineitems` depending on the
  the purchases made by the user. See line item section for more info.

Modules Responsible for handling business logic for `order` model.
- [`Snitch.Data.Schema.Order`][2]: Defines the order schema.
- [`Snitch.Data.Model.Order`][3]: Handles the CRUD functions for order model.
- [`Snitch.Domain.Order`][4]: Exposes Calculation and other important functions.
- [`Snitch.Domain.Order.Transitions`][5]: Exposes Transition function for order state
  transitions.
- [`Snitch.Domain.Order.DefaultMachine`][6]: The _default_ order state machine to handle state
   transitions. The _default_ order state machine can be replaced with any custom state machine to 
   handle transitions.

## LineItems
  A line item is used to keep track of items in the order. It is a kind of a link
  between the `order` and `product`s with additional information in terms of purchase 
  made.  
  When a product is added to an order it's price is set as the unit price of the line item.
  This is done so that in case the price of the product changes in future, the line item
  would reflect the price used at the time of ordering.

  Line Item  model attributes.
  - `quantity`: It's about the number of items of a particular type.
  - `unit_price`: The price of an item for that particular product.

  Line Item relationships:
  - **_belongs to_** `product`: Foreign key association to link the product.
  - **_belongs to_** `order`: Foreign key association with the order.

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
  To know about the conditions see the order state machine [_Order States_][8][_advanced_].
  
  The `order` can be moved from one state to another using the exposed API call.
  A successful transition puts the order in the next state, whereas an unsuccessful
  one keeps the order in the same state and returns an error message.
  To See the APIs for the transitions see, [Checkout API Flow][7].

## Address
An order has two different addresses associated with it:
- Shipping Address
- Billing Address

Both these addresses have their own significance.

### Billing Address
The billing address of an order is connected with the payment method used for
making the purchase. It is used to identify an authorized use of the card. It is
also used as an address to which the bill for the purchase would sent.  
The AVS(Address Verification System) employed by online merchants to identify
any fraud related to the payment made is also based on the billing address used.

### Shipping Address
It refers to the address to which `packages` of the order would be sent to.
The **shipping cost** for the order is calculated based on the `zone` the
`shipping address` falls into.  
Some merchants have multiple stock locations for their store. In that case a package
in an `order` can be fulfilled from multiple stock locations. The `stock location` from
which the `package` would be shipped is selected based on the shipping address.

## Packages
An order in the `delivery` state consists of multiple packages. These are the actual shippable
entities of an order.

Once the order transitions to the `confirmed` state, further actions happen on `packages`
of the order. The `packages` also go through a series of state changes based on
the admin action. The main states of a package are:
 - `pending`
 - `ready`
 - `shipped`
 - `delivered`  
 To know more about `packages` see, [Shipments][9]

## Payments
- Multiple payments for the order, at the moment not supported support coming very soon.
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
[10]: /docs/orders.html#order-states
[11]: /docs/orders.html#address
[12]: /docs/orders.html#packages
