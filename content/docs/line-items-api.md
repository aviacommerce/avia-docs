---
id: line-items-api
title: Line Items API
layout: docs
category: Reference
permalink: docs/line-items-api.html

---

## Add to cart

Adds line item to a cart

```
POST /api/v1/line_items
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Example Request

```json
{
  "data": {
    "type": "line_item",
    "attributes": {
      "quantity": 1
    },
    "relationships": {
      "order": {
        "data": {
          "id": 4,
          "type": "order"
        }
      },
      "product": {
        "data": {
          "id": 14,
          "type": "product"
        }
      }
    }
  }
}
```
### Parameters
| Parameter                          | Description                                          | Parameter Type | Data Type |
|------------------------------------|------------------------------------------------------|----------------|-----------|
| `relationships[order][data][id]`   | order id where the line item should be added         | body           | number    |
| `relationships[product][data][id]` | product id which needs to be added to cart           | body           | number    |
| `data[attributes][quantity]`       | quantity of product that should be added to cart     | body           | number    |

### Example Response

<details>
<summary>Example response (STATUS: 200 OK)</summary>
<br>

```json
{
  "data": {
    "attributes": {
      "adjustment_total": null,
      "billing_address": null,
      "item_count": 1,
      "number": "Bu1sAJDu1YhtsRHl7~fne",
      "order_total_amount": {
        "amount": "1000.00",
        "currency": "USD"
      },
      "promot_total": null,
      "shipping_address": null,
      "state": "cart",
      "user_id": 4
    },
    "id": "4",
    "links": {
      "self": "/orders/4"
    },
    "relationships": {
      "line_items": {
        "data": [
          {
            "id": "9",
            "type": "line_item"
          }
        ]
      },
      "packages": {},
      "payments": {}
    },
    "type": "order"
  },
  "included": [
    {
      "attributes": {
        "id": 9,
        "product_id": 14,
        "quantity": 1,
        "total_price": "1000.00",
        "unit_price": {
          "amount": "1000.00",
          "currency": "USD"
        }
      },
      "id": "9",
      "links": {
        "self": "/line_items/9"
      },
      "relationships": {
        "product": {
          "data": {
            "id": "14",
            "type": "product"
          }
        }
      },
      "type": "line_item"
    },
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "\"This ...is the Golden Snitch, and it's the most important ball of the lot. It's very hard to catch because it's so fast and difficult to see. It's the Seeker's job to catch it.\"",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/14/images/snitch%20.jpeg"
          }
        ],
        "max_retail_price": {
          "amount": "1200.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Golden snitch",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "5.0",
          "rating_list": {
            "5": {
              "position": 5,
              "value": "100.0"
            }
          },
          "review_count": 1
        },
        "selling_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "slug": "golden-snitch"
      },
      "id": "14",
      "links": {
        "self": "/products/golden-snitch"
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
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```

</details>

## Delete line item

Remove a line item from cart

```
DELETE /api/v1/line_items
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Example Request

```json
{
  "data":{
    "id":8,
    "type":"line_item"
  }
}
```
### Parameters

| Parameter                        | Description                                      | Parameter Type | Data Type |
|----------------------------------|--------------------------------------------------|----------------|-----------|
| data[id]                         | line item id which needs to be deleted           | body           | number    |

### Example Response

Example response (STATUS: 204 OK)

NA
