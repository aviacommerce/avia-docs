---
id: products-api
title: Products StoreFront API
layout: docs
category: Reference
permalink: docs/products-api.html
next: orders-api.html
---

>Note
>
> Content type for all the requests should be `application/vnd.api+json`.

## Index

Lists all the `active` products for all the requests. User does not need to be authenticated to make this call.

```
GET /api/v1/products
```

Products are paginated and can be iterated through by passing along a page parameter:

```
GET /api/v1/products?page[limit]=2&page[offset]=2",
```

#### Response

Returns the products and its attributes. This does not include the variants by default.

`STATUS 200`

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

### Products with variants 

```
Get /api/v1/products?include=variants 
```