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

### Request

```
GET /api/v1/products
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

#### Params

| Parameter      | Description                                                | Parameter Type | Data Type |
|:--------------:|:----------------------------------------------------------:|:--------------:|:---------:|
| `page[limit]`  | per page count                                             | query          | string    |
| `page[offset]` | page number                                                | query          | string    |

Products are paginated and can be iterated through by passing along a page parameter:

```
GET /api/v1/products?page[limit]=2&page[offset]=2"
```

### Response

Returns the products and its attributes. This does not include the variants by default.

<details><summary>Example response (STATUS: 200 OK)</summary>

```json
"data": [
    {
      "attributes": {
        "available_on": "2018-07-09T17:11:11.000000Z",
        "deleted_at": null,
        "description": "description.",
        "discontinue_on": null,
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Hill's Prescription",
        "promotionable": null,
        "slug": "Hills-Prescription"
      },
      "id": "1",
      "links": {
        "self": "/products/Hills-Prescription"
      },
      "type": "product"
    }
  ],
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

### Request

```
GET /api/v1/products/{slug}
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

where `slug` is a unique product identifier. Read more about slugs [here](https://confluence.atlassian.com/bitbucket/what-is-a-slug-224395839.html).

#### Params

| Parameter      | Description                                                | Parameter Type | Data Type |
|:--------------:|:----------------------------------------------------------:|:--------------:|:---------:|
| `slug`         | a unique product identifier                                | query          | string    |


### Response

Returns the product struct with variants.

<details><summary>Example response (STATUS: 200 OK)</summary>

```
{
  "data": {
    "attributes": {
      "available_on": null,
      "deleted_at": null,
      "description": "Mens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cotten",
      "discontinue_on": null,
      "images": [
        {
          "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/11/images/red-apache.jpg"
        }
      ],
      "max_retail_price": {
        "amount": "1200.00",
        "currency": "USD"
      },
      "meta_description": null,
      "meta_keywords": null,
      "meta_title": null,
      "name": "Mens Shirt cotten",
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
        "amount": "300.00",
        "currency": "USD"
      },
      "slug": "mens-shirt-cotten"
    },
    "id": "11",
    "links": {
      "self": "/products/mens-shirt-cotten"
    },
    "relationships": {
      "options": {
        "data": []
      },
      "reviews": {
        "data": [
          {
            "id": "28",
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
        "display_name": "Color",
        "name": "color"
      },
      "id": "1",
      "type": "option_type"
    },
    {
      "attributes": {
        "display_name": null,
        "option_type_id": 1,
        "value": "Red"
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
        "value": "Green"
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
        "available_on": null,
        "deleted_at": null,
        "description": null,
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/12/images/red-apache.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "400.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Mens Shirt cotten Red",
        "promotionable": null,
        "rating_summary": {
          "average_rating": "0",
          "rating_list": {},
          "review_count": 0
        },
        "selling_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "slug": "mens-shirt-cotten-red"
      },
      "id": "12",
      "links": {
        "self": "/products/mens-shirt-cotten-red"
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
        "description": null,
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/13/images/apachegreen.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Mens Shirt cotten Green",
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
          "amount": "600.00",
          "currency": "USD"
        },
        "slug": "mens-shirt-cotten-green"
      },
      "id": "13",
      "links": {
        "self": "/products/mens-shirt-cotten-green"
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
    },
    {
      "attributes": {},
      "id": "28",
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
        "description": "Nice fabric",
        "locale": "en",
        "name": "Gopal",
        "title": "Nice Product",
        "updated_at": "2018-09-24T08:06:44.840384"
      },
      "id": "28",
      "links": {
        "self": "/reviews/28"
      },
      "relationships": {
        "rating_option_vote": {
          "data": {
            "id": "28",
            "type": "rating_option_vote"
          }
        }
      },
      "type": "review"
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

### Request

```
GET /api/v1/products?filter[name]=broomstick
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

#### Params

| Parameter      | Description                            | Parameter Type | Data Type |
|:--------------:|:--------------------------------------:|:--------------:|:---------:|
| `filter[name]` | `name` can be any field to search with | query          | string    | 
| `page[limit]`  | per page count                         | query          | string    |
| `page[offset]` | page number                            | query          | string    |


The search results are paginated.

```
GET /api/v1/products?filter[name]=broomstick&page[limit]=2&page[offset]=2
```

### Response

<details><summary>Example response (STATUS: 200 OK)</summary>

```
{
  "data": [
    {
      "attributes": {
        "available_on": null,
        "deleted_at": null,
        "description": "Mens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cottenMens Shirt cotten",
        "discontinue_on": null,
        "images": [
          {
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/11/images/red-apache.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "1200.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Mens Shirt cotten",
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
          "amount": "1000.00",
          "currency": "USD"
        },
        "slug": "mens-shirt-cotten"
      },
      "id": "11",
      "links": {
        "self": "/products/mens-shirt-cotten"
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
            "product_url": "https://snitch-product-images.s3.amazonaws.com/uploads/images/product/13/images/apachegreen.jpg"
          }
        ],
        "max_retail_price": {
          "amount": "800.00",
          "currency": "USD"
        },
        "meta_description": null,
        "meta_keywords": null,
        "meta_title": null,
        "name": "Mens Shirt cotten Green",
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
          "amount": "600.00",
          "currency": "USD"
        },
        "slug": "mens-shirt-cotten-green"
      },
      "id": "13",
      "links": {
        "self": "/products/mens-shirt-cotten-green"
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
    "self": "http://localhost:3000/api/v1/products?filter[name]=cotten&page[limit]=2&page[offset]=1"
  }
}
```

</details>

