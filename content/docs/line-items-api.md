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

#### Request

```json
{
  "data":{
    "type":"line_item",
    "attributes":{
      "quantity":2
    },
    "relationships":{
      "order":{
        "data":{
          "id":4,
          "type":"order"
        }
      },
      "product":{
        "data":{
          "id":11,
          "type":"product"
        }
      }
    }
  }
}
```

| Parameter                          | Description                                          | Parameter Type | Data Type |
|------------------------------------|------------------------------------------------------|----------------|-----------|
| `relationships[order][data][id]`   | order id where the line item should be added         | body           | number    |
| `relationships[product][data][id]` | product id which needs to be added to cart           | body           | number    |
| `data[attributes][quantity]`       | quantity of product that should be added to cart     | body           | number    |

#### Response

`STATUS 200`

<details>
<summary>Response</summary>
<br>

```json
{
  "data":{
    "attributes":{
      "adjustment_total":null,
      "billing_address":null,
      "item_count":2,
      "number":"P1W1nDW7qaMynoxSN54~b",
      "order_total_amount":{
        "amount":"118.00",
        "currency":"USD"
      },
      "promot_total":null,
      "shipping_address":null,
      "state":"cart",
      "user_id":4
    },
    "id":"4",
    "links":{
      "self":"/orders/4"
    },
    "relationships":{
      "line_items":{
        "data":[
          {
            "id":"8",
            "type":"line_item"
          }
        ]
      },
      "packages":{

      },
      "payments":{

      }
    },
    "type":"order"
  },
  "included":[
    {
      "attributes":{
        "id":8,
        "product_id":11,
        "quantity":2,
        "total_price":"118.00",
        "unit_price":{
          "amount":"59.00",
          "currency":"USD"
        }
      },
      "id":"8",
      "links":{
        "self":"/line_items/8"
      },
      "relationships":{
        "product":{
          "data":{
            "id":"11",
            "type":"product"
          }
        }
      },
      "type":"line_item"
    },
    {
      "attributes":{
        "available_on":null,
        "deleted_at":null,
        "description":"This Hogwarts School Trunk has been crafted to resemble those used by Hogwarts students for travel on the Hogwarts Express. This trunk also comes with a Personalised Hogwarts Acceptance Letter.\r\n\r\nThe Hogwarts School Trunk measures 45cm x 30cm x 23cm and features a carry handle and clasp. The Hogwarts school crest is printed on the top of the trunk, and feature custom initials on the side.",
        "discontinue_on":null,
        "images":[

        ],
        "max_retail_price":{
          "amount":"80.00",
          "currency":"USD"
        },
        "meta_description":null,
        "meta_keywords":null,
        "meta_title":null,
        "name":"HOGWARTS SCHOOL TRUNK",
        "promotionable":null,
        "rating_summary":{
          "average_rating":"0",
          "rating_summary":{

          },
          "review_count":0
        },
        "selling_price":{
          "amount":"59.00",
          "currency":"USD"
        },
        "slug":"hogwarts-school-trunk"
      },
      "id":"11",
      "links":{
        "self":"/products/hogwarts-school-trunk"
      },
      "relationships":{
        "options":{

        },
        "reviews":{

        },
        "theme":{
          "data":null
        },
        "variants":{

        }
      },
      "type":"product"
    }
  ],
  "jsonapi":{
    "version":"1.0"
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

#### Request

```json
{
  "data":{
    "id":8,
    "type":"line_item"
  }
}
```

| Parameter                        | Description                                      | Parameter Type | Data Type |
|----------------------------------|--------------------------------------------------|----------------|-----------|
| data[id]                         | line item id which needs to be deleted           | body           | number    |

#### Response

Status 204

NA
