---
id: products-api
title: Products API
layout: docs
category: Reference
permalink: docs/products-api.html
next: orders-api.html
---

## Index

Lists all the `active` products for all the requests. User does not need to be authenticated to make this call. Product table has a `is_active` flag which determines if the product goes live on the store-front.

### Example Request

```
GET /api/v1/products
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Parameters

| Parameter      | Description                                                | Parameter Type | Data Type |
|:--------------:|:----------------------------------------------------------:|:--------------:|:---------:|
| `page[limit]`  | per page count                                             | query          | string    |
| `page[offset]` | page number                                                | query          | string    |

Products are paginated and can be iterated through by passing along a page parameter:

```
GET /api/v1/products?page[limit]=2&page[offset]=1"
```

###  Example Response

Returns the products and its attributes. This does not include the variants by default.

<details><summary>Example response (STATUS: 200 OK)</summary>

```json
{
  "data": [
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
    },
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "Nimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broomNimbus 2000 broom",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/11/images/Nimbus_2000_1.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "4.5",
          "rating_list": {
            "4": {
              "position": 4,
              "value": "50.0"
            },
            "5": {
              "position": 5,
              "value": "50.0"
            }
          },
          "review_count": 2
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom"
      },
      "id": "11",
      "links": {
        "self": "/products/nimbus-2000-broom"
      },
      "relationships": {
        "options": {},
        "reviews": {},
        "theme": {
          "data": {
            "id": "1",
            "type": "variation_theme"
          }
        },
        "variants": {}
      },
      "type": "product"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "last": "http://localhost:3000/api/v1/products?page[limit]=2&page[offset]=2",
    "next": "http://localhost:3000/api/v1/products?page[limit]=2&page[offset]=2",
    "self": "http://localhost:3000/api/v1/products?page[limit]=2&page[offset]=1"
  }
}
```

</details>



-----
## Show

To view the details of a product make this request.

### Example Request

```
GET /api/v1/products/{slug}
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

where `slug` is a unique product identifier. Read more about slugs [here](https://confluence.atlassian.com/bitbucket/what-is-a-slug-224395839.html).

### Parameters

| Parameter      | Description                                                | Parameter Type | Data Type |
|:--------------:|:----------------------------------------------------------:|:--------------:|:---------:|
| `slug`         | a unique product identifier                                | query          | string    |


### Example Response

Returns the product struct with variants.

<details><summary>Example response (STATUS: 200 OK)</summary>

```
{
  "data": {
    "attributes": {
      "available_on": null,
      "deleted_at": null,
      "description": "Nimbus 2000 wooden shaft for broomstick - Harry Potter. Material - Pine. Handmade - with carved sign, finished with a stain & mineral oil (without chemical). Only sign have a paint.",
      "discontinue_on": null,
      "images": [
        {
          "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/11/images/Nimbus_2000_1.jpg"
        }
      ],
      "max_retail_price": {
        "amount": "1000.00",
        "currency": "USD"
      },
      "meta_description": null,
      "meta_keywords": null,
      "meta_title": null,
      "name": "Nimbus 2000 broom",
      "promotionable": null,
      "rating_summary": {
        "average_rating": "4.5",
        "rating_list": {
          "4": {
            "position": 4,
            "value": "50.0"
          },
          "5": {
            "position": 5,
            "value": "50.0"
          }
        },
        "review_count": 2
      },
      "selling_price": {
        "amount": "800.00",
        "currency": "USD"
      },
      "slug": "nimbus-2000-broom"
    },
    "id": "11",
    "links": {
      "self": "/products/nimbus-2000-broom"
    },
    "relationships": {
      "options": {
        "data": []
      },
      "reviews": {
        "data": [
          {
            "id": "4",
            "type": "review"
          },
          {
            "id": "5",
            "type": "review"
          }
        ]
      },
      "theme": {
        "data": {
          "id": "1",
          "type": "variation_theme"
        }
      },
      "variants": {
        "data": [
          {
            "id": "12",
            "type": "product"
          },
          {
            "id": "13",
            "type": "product"
          }
        ]
      }
    },
    "type": "product"
  },
  "included": [
    {
      "attributes": {
        "display_name": "color",
        "name": "color"
      },
      "id": "1",
      "type": "option_type"
    },
    {
      "attributes": {
        "display_name": null,
        "option_type_id": 1,
        "value": "Brown"
      },
      "id": "1",
      "relationships": {
        "option_type": {
          "data": {
            "id": "1",
            "type": "option_type"
          }
        }
      },
      "type": "product_option_value"
    },
    {
      "attributes": {
        "name": "color"
      },
      "id": "1",
      "relationships": {
        "option_types": {
          "data": [
            {
              "id": "1",
              "type": "option_type"
            }
          ]
        }
      },
      "type": "variation_theme"
    },
    {
      "attributes": {
        "display_name": null,
        "option_type_id": 1,
        "value": "Gray"
      },
      "id": "2",
      "relationships": {
        "option_type": {
          "data": {
            "id": "1",
            "type": "option_type"
          }
        }
      },
      "type": "product_option_value"
    },
    {
      "attributes": {},
      "id": "4",
      "relationships": {
        "rating_option": {
          "data": {
            "id": "5",
            "type": "rating_options"
          }
        }
      },
      "type": "rating_option_vote"
    },
    {
      "attributes": {
        "code": "4",
        "position": 4,
        "value": 4
      },
      "id": "4",
      "type": "rating_options"
    },
    {
      "attributes": {
        "description": "Nice broom i live this.",
        "locale": "en",
        "name": "Hermoine",
        "title": "Nice Product",
        "updated_at": "2018-09-28T06:06:47.089817"
      },
      "id": "4",
      "links": {
        "self": "/reviews/4"
      },
      "relationships": {
        "rating_option_vote": {
          "data": {
            "id": "4",
            "type": "rating_option_vote"
          }
        }
      },
      "type": "review"
    },
    {
      "attributes": {},
      "id": "5",
      "relationships": {
        "rating_option": {
          "data": {
            "id": "4",
            "type": "rating_options"
          }
        }
      },
      "type": "rating_option_vote"
    },
    {
      "attributes": {
        "code": "5",
        "position": 5,
        "value": 5
      },
      "id": "5",
      "type": "rating_options"
    },
    {
      "attributes": {
        "description": "Great product nice seating.",
        "locale": "en",
        "name": "Ron",
        "title": "Go for it.",
        "updated_at": "2018-09-28T06:10:46.771429"
      },
      "id": "5",
      "links": {
        "self": "/reviews/5"
      },
      "relationships": {
        "rating_option_vote": {
          "data": {
            "id": "5",
            "type": "rating_option_vote"
          }
        }
      },
      "type": "review"
    },
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": null,
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/12/images/Nimbus_2000_1.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom Brown",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "4.0",
          "rating_list": {
            "4": {
              "position": 4,
              "value": "100.0"
            }
          },
          "review_count": 1
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom-brown"
      },
      "id": "12",
      "links": {
        "self": "/products/nimbus-2000-broom-brown"
      },
      "relationships": {
        "options": {
          "data": [
            {
              "id": "1",
              "type": "product_option_value"
            }
          ]
        },
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
        "available_on": null,
        "deleted_at": null,
        "description": "Nimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom Gray",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/13/images/white.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom Gray",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "3.0",
          "rating_list": {
            "2": {
              "position": 2,
              "value": "50.0"
            },
            "4": {
              "position": 4,
              "value": "50.0"
            }
          },
          "review_count": 2
        },
        "selling_price": {
          "amount": "500.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom-gray"
      },
      "id": "13",
      "links": {
        "self": "/products/nimbus-2000-broom-gray"
      },
      "relationships": {
        "options": {
          "data": [
            {
              "id": "2",
              "type": "product_option_value"
            }
          ]
        },
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


-----
## Search

To search a product by it's property or any other attribute use this API.

### Example Request

```
GET /api/v1/products?filter[name]=broom
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Parameters

| Parameter      | Description                            | Parameter Type | Data Type |
|:--------------:|:--------------------------------------:|:--------------:|:---------:|
| `filter[name]` | `name` can be any field to search with | query          | string    |
| `page[limit]`  | per page count                         | query          | string    |
| `page[offset]` | page number                            | query          | string    |


The search results are paginated.

```
GET /api/v1/products?filter[name]=broom&page[limit]=2&page[offset]=1
```

### Example Response

<details><summary>Example response (STATUS: 200 OK)</summary>

```
{
  "data": [
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "Nimbus 2000 wooden shaft for broomstick - Harry Potter. Material - Pine. Handmade - with carved sign, finished with a stain & mineral oil (without chemical). Only sign have a paint.",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/11/images/Nimbus_2000_1.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "4.5",
          "rating_list": {
            "4": {
              "position": 4,
              "value": "50.0"
            },
            "5": {
              "position": 5,
              "value": "50.0"
            }
          },
          "review_count": 2
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom"
      },
      "id": "11",
      "links": {
        "self": "/products/nimbus-2000-broom"
      },
      "relationships": {
        "options": {},
        "reviews": {},
        "theme": {
          "data": {
            "id": "1",
            "type": "variation_theme"
          }
        },
        "variants": {}
      },
      "type": "product"
    },
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": null,
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/12/images/Nimbus_2000_1.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom Brown",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "4.0",
          "rating_list": {
            "4": {
              "position": 4,
              "value": "100.0"
            }
          },
          "review_count": 1
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom-brown"
      },
      "id": "12",
      "links": {
        "self": "/products/nimbus-2000-broom-brown"
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
  },
  "links": {
    "self": "http://localhost:3000/api/v1/products?filter[name]=broom&page[limit]=2&page[offset]=1"
  }
}
```

</details>


-----
## Sort

To sort searched products by it's property or any other attribute use this API.

### Example Request

```
GET /api/v1/products?filter[name]=broom&sort=date
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Parameters

| Parameter      | Description                            | Parameter Type | Data Type |
|:--------------:|:--------------------------------------:|:--------------:|:---------:|
| `sort=attribute` | `attribute` can be any field to sort with | query          | string    |
| `page[limit]`  | per page count                         | query          | string    |
| `page[offset]` | page number                            | query          | string    |


The sort results are paginated.

```
GET /api/v1/products?filter[name]=broom&sort=date&page[limit]=2&page[offset]=1
```

### Example Response

<details><summary>Example response (STATUS: 200 OK)</summary>

```
{
  "data": [
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "Nimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom GrayNimbus 2000 broom Gray",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/13/images/white.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom Gray",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "3.0",
          "rating_list": {
            "2": {
              "position": 2,
              "value": "50.0"
            },
            "4": {
              "position": 4,
              "value": "50.0"
            }
          },
          "review_count": 2
        },
        "selling_price": {
          "amount": "500.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom-gray"
      },
      "id": "13",
      "links": {
        "self": "/products/nimbus-2000-broom-gray"
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
        "available_on": null,
        "deleted_at": null,
        "description": null,
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/12/images/Nimbus_2000_1.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1000.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Nimbus 2000 broom Brown",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "4.0",
          "rating_list": {
            "4": {
              "position": 4,
              "value": "100.0"
            }
          },
          "review_count": 1
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "nimbus-2000-broom-brown"
      },
      "id": "12",
      "links": {
        "self": "/products/nimbus-2000-broom-brown"
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
  },
  "links": {
    "self": "http://localhost:3000/api/v1/products?filter[name]=broom&page[limit]=2&page[offset]=1&sort=date"
  }
}
```

</details>
