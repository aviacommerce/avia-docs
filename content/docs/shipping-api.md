---
id: shipping-api
title: Shipping API
layout: docs
category: Reference
permalink: docs/shipping-api.html

---

## Shipping Preferences

---

> TODO: Please add more info as needed.

This api returns the packages for orders.

```text
patch /api/v1/orders/:order_id/add-shipment
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Example Request

```
{
  "data": {
    "type": "orders",
    "attributes": {
      "id": 5,
      "packages": [
        {}
      ]
    }
  }
}
```

### Example Response
<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "attributes": {
      "adjustment_total": null,
      "billing_address": {
        "address_line_1": "4 Privet Drive",
        "address_line_2": null,
        "alternate_phone": "1212121212",
        "city": "Surrey",
        "country_id": 80,
        "first_name": "Harry",
        "id": "f76771f6-37fb-4675-b2c2-c7205307cb1b",
        "last_name": "Potter",
        "phone": "1212121212",
        "state_id": 1493,
        "zip_code": "123456"
      },
      "item_count": 1,
      "number": "0PYPVEqTerQSyQGW4lvt6",
      "order_total_amount": {
        "amount": "800.00",
        "currency": "USD"
      },
      "promot_total": null,
      "shipping_address": {
        "address_line_1": "4 Privet Drive",
        "address_line_2": null,
        "alternate_phone": "1212121212",
        "city": "Surrey",
        "country_id": 80,
        "first_name": "Harry",
        "id": "8af1a642-3c73-420f-a87a-ea2d5d141616",
        "last_name": "Potter",
        "phone": "1212121212",
        "state_id": 1493,
        "zip_code": "123456"
      },
      "state": "delivery",
      "user_id": 5
    },
    "id": "5",
    "links": {
      "self": "/orders/5"
    },
    "relationships": {
      "line_items": {
        "data": [
          {
            "id": "11",
            "type": "line_item"
          }
        ]
      },
      "packages": {
        "data": [
          {
            "id": "26",
            "type": "package"
          }
        ]
      },
      "payments": {}
    },
    "type": "order"
  },
  "included": [
    {
      "attributes": {
        "id": 11,
        "product_id": 12,
        "quantity": 1,
        "total_price": "800.00",
        "unit_price": {
          "amount": "800.00",
          "currency": "USD"
        }
      },
      "id": "11",
      "links": {
        "self": "/line_items/11"
      },
      "relationships": {
        "product": {
          "data": {
            "id": "12",
            "type": "product"
          }
        }
      },
      "type": "line_item"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```

</details>
