---
id: orders-api
title: Orders Store Front API
layout: docs
category: Reference
permalink: docs/orders-api.html

---

## Current Order

Returns an `order` for the signed in `user`. The order can be in any of the following
states:
- `cart`
- `address`
- `delivery`
- `payment`

The `state` in which the `order` is returned, depends on the stage on which the user
left the storefront. In case, the user visits the store front for the first time,
an order is created in the `cart` state and returned.

### Example Request
```
POST /api/v1/orders/current
Content-Type : application/vnd.api+json
Accept       : application/vnd.api+json
Authorization: "Bearer <token>"
```

### Parameters
`{}`

### Example Response
<details><summary>Detail</summary>
<p>

`STATUS 200 OK`

```json
{
    "data": {
        "attributes": {
            "adjustment_total": null,
            "billing_address": null,
            "item_count": 0,
            "number": "~bMcYqdh7aSebn8CVPlDe",
            "order_total_amount": {
                "amount": "0.00",
                "currency": "USD"
            },
            "promot_total": null,
            "shipping_address": null,
            "state": "cart",
            "user_id": 8
        },
        "id": "10",
        "links": {
            "self": "/orders/10"
        },
        "relationships": {
            "line_items": {
                "data": []
            },
            "packages": {
                "data": []
            },
            "payments": {}
        },
        "type": "order"
    },
    "jsonapi": {
        "version": "1.0"
    }
}
```
</details>

> TODO: Add links when order is in `payment` and `delivery` etc.

## Show(cart)
The details of a single `order` can be viewed by making a request using the
`order number`.

### Example Request
```
POST api/v1/orders/:order_number
Content-Type : application/vnd.api+json
Accept       : application/vnd.api+json
```

### Parameters
| Parameter    | Description                     | Parameter type | Data Type |
|--------------|---------------------------------|----------------|-----------|
| *`order_number` | Order number field of an order. | path           | string    |

### Example Response

<details><summary>Detail</summary>
<p>

`STATUS 200 OK`

```json
{
  "data": {
      "attributes": {
          "adjustment_total": null,
          "billing_address": null,
          "item_count": 0,
          "number": "~bMcYqdh7aSebn8CVPlDe",
          "order_total_amount": {
              "amount": "0.00",
              "currency": "USD"
          },
          "promot_total": null,
          "shipping_address": null,
          "state": "cart",
          "user_id": 8
      },
      "id": "10",
      "links": {
          "self": "/orders/10"
      },
      "relationships": {
          "line_items": {
              "data": []
          },
          "packages": {
              "data": []
          },
          "payments": {
              "data": []
          }
      },
      "type": "order"
  },
  "jsonapi": {
      "version": "1.0"
  }
}
```
</p>
</details>
