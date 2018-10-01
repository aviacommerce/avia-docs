---
id: payments
title: Payments
layout: docs
category: Reference
permalink: docs/payments.html

---

## Overview

Payments in AviaCommerce has been designed in a manner to allow multiple payment methods
to be available to choose from during checkout. The logic for payment processing is
completely detached from order flow in order to maintain flexibility in implementation
of the processing logic.  

Though there is flexibility in creating different payment methods but, all these payment
methods are essentially of one of the four main types which are gateway based(used 
to process card payments), cash on delivery, store credits based or hosted payments(again
based on gateways).

In order to track `payments` for `orders` a [supertype subtype modelling][1] is used.
The `payment` model stores the details which are usually common for all payment types
whereas the type specific information is stored in the corresponding `subtype`.
An `order` can be paid through multiple payment methods. This has been done keeping
in mind the functionality for store credits, which gives customers to utilize store
credits to make payment.

The attributes of the payment table:
- `slug`: A unique identifier to be used while sending the information to the 
   payment gateway for processing. Some gateways report duplicate payments.
- `payment_type`: A string identifier to identify the type of payment, `cod`, 
   `hosted_payment`, `card` or `store credits`.
- `amount`: The amount to be paid in this payment.
- `state`: An identifier to see if the payment is `pending`, `successful` or
   it failed during the attempt.


Payment states

Different library to handle implementation details

Payment Method

Different types of Payment Methods

Hosted

Cash On Delivery

Card


[1]: https://stackoverflow.com/questions/4763141/data-modeling-supertype-subtype
