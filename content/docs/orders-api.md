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
Authorization: Bearer token
```

### Parameters
`{}`

### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

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

### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

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
</details>


## Show All Orders
This API will returns all orders belongs to user. 

### Example Request
```
GET api/v1/orders
Content-Type : application/vnd.api+json
Accept       : application/vnd.api+json
Authorization: Bearer token
```

### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": [
    {
      "attributes": {
        "adjustment_total": null,
        "billing_address": {
          "address_line_1": "4 Privet Drive",
          "address_line_2": null,
          "alternate_phone": null,
          "city": "Little Whinging",
          "country_id": 80,
          "first_name": "Harry ",
          "id": "8c51c476-931f-4308-9a95-67ae444d807e",
          "last_name": "Potter",
          "phone": "1234567890",
          "state_id": 1561,
          "zip_code": "123456"
        },
        "item_count": 1,
        "number": "dvr9O8gb230k~04ViNv_A",
        "order_total_amount": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "promot_total": null,
        "shipping_address": {
          "address_line_1": "4 Privet Drive",
          "address_line_2": null,
          "alternate_phone": null,
          "city": "Little Whinging",
          "country_id": 80,
          "first_name": "Harry ",
          "id": "ae81496c-4b8e-44d8-a544-efcd71abeb10",
          "last_name": "Potter",
          "phone": "1234567890",
          "state_id": 1561,
          "zip_code": "123456"
        },
        "state": "confirmed",
        "user_id": 3
      },
      "id": "4",
      "links": {
        "self": "/orders/4"
      },
      "relationships": {
        "line_items": {
          "data": [
            {
              "id": "4",
              "type": "line_item"
            }
          ]
        },
        "packages": {},
        "payments": {}
      },
      "type": "order"
    },
    {
      "attributes": {
        "adjustment_total": null,
        "billing_address": null,
        "item_count": 0,
        "number": "D2WDK_g2q6BbM0Bwg6WLR",
        "order_total_amount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "promot_total": null,
        "shipping_address": null,
        "state": "cart",
        "user_id": 3
      },
      "id": "5",
      "links": {
        "self": "/orders/5"
      },
      "relationships": {
        "line_items": {
          "data": []
        },
        "packages": {},
        "payments": {}
      },
      "type": "order"
    }
  ],
  "included": [
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "Mens formalMens formalMens formalMens formal",
        "discontinue_on": null,
        "images": [],
        "is_orderable": true,
        "max_retail_price": {
          "amount": "2000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Mens formal",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "0",
          "rating_list": {},
          "review_count": 0
        },
        "selling_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "slug": "mens-formal"
      },
      "id": "2",
      "links": {
        "self": "/products/mens-formal"
      },
      "relationships": {
        "options": {},
        "reviews": {},
        "theme": {
          "data": null
        },
        "variants": {}
      },
      "type": "product"
    },
    {
      "attributes": {
        "id": 4,
        "product_id": 2,
        "quantity": 1,
        "total_price": "1000.00",
        "unit_price": {
          "amount": "1000.00",
          "currency": "USD"
        }
      },
      "id": "4",
      "links": {
        "self": "/line_items/4"
      },
      "relationships": {
        "product": {
          "data": {
            "id": "2",
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


