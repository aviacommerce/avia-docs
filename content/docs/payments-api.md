---
id: payments-api
title: Payments API
layout: docs
category: Reference
permalink: docs/payments-api.html

---

> These api's are for signed in user only

## List Payment Methods

---

This api fetches list of avilable payment methods eg. COD, Payubiz.


```text
GET /api/v1/payment/payment-methods
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```
### Example Response
<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": [
    {
      "attributes": {
        "active?": true,
        "code": "hpm",
        "description": "Hosted payment",
        "live_mode?": false,
        "name": "Payubiz"
      },
      "id": "1",
      "links": {
        "self": "/payment/payment-methods/1"
      },
      "type": "payment_method"
    },
    {
      "attributes": {
        "active?": true,
        "code": "cod",
        "description": "cash on delivery",
        "live_mode?": false,
        "name": "COD"
      },
      "id": "2",
      "links": {
        "self": "/payment/payment-methods/2"
      },
      "type": "payment_method"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```

</details>

## Add Payment Method to Order

---
> TODO: Please add more information as needed.

Selected payment method is added to order.

```text
POST /api/v1/orders/:order_id/add-payment
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```
### Parameters

| Parameter     | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | ------------- |
| id            | Order Id      |    body       | integer       |
| amount        | Order total amount | body     | text          |
| `payment_method_id` | Selected Payment method id  | body | integer |


### Example Request

```json
{  
  "data": {
    "type": "orders", 
    "attributes": {
      "id": 6,
      "amount": "800.00",
      "payment_method_id": 2
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
        "address_line_1": "Hampstead Garden Suburb, Heathgate",
        "address_line_2": null,
        "alternate_phone": null,
        "city": "London",
        "country_id": 80,
        "first_name": "Hermoine",
        "id": "f76771f6-37fb-4675-b2c2-c7205307cb1b",
        "last_name": "Grengers",
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
        "address_line_1": "Hampstead Garden Suburb, Heathgate",
        "address_line_2": null,
        "alternate_phone": null,
        "city": "London",
        "country_id": 80,
        "first_name": "Hermoine",
        "id": "8af1a642-3c73-420f-a87a-ea2d5d141616",
        "last_name": "Grengers",
        "phone": "1212121212",
        "state_id": 1493,
        "zip_code": "123456"
      },
      "state": "payment",
      "user_id": 5
    },
    "id": "6",
    "links": {
      "self": "/orders/6"
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
      "packages": {},
      "payments": {
        "data": [
          {
            "id": "1",
            "type": "payment"
          }
        ]
      }
    },
    "type": "order"
  },
  "included": [
    {
      "attributes": {
        "amount": {
          "amount": "800.00000000",
          "currency": "USD"
        },
        "payment_method_id": 2,
        "slug": "payment_slug-WCGCxaw3o7toS8xdefeSz"
      },
      "id": "1",
      "type": "payment"
    },
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

## Payment Request Using Payubiz

---
> TODO: Please add more information as needed.

This api will request to payubiz with required params. On `success` it will return redirect `url` of Payubiz hosted payment gateway. 

```text
POST /api/v1/hosted-payment/payubiz-request
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter      | Description   | Parameter Type| Data Type     |
| -------------  | ------------- | ------------- | ------------- |
| order_id       |  Order Id     |  body         | integer       |
| payment_id     |  payment Id   |  body         | integer       |
| `order_number` |  Order number |  body         | text          |
| `payment_method_id` | Selected Payment method id|  body        | integer |
| amount         | Order total amount|    body   |    text       |
| `product_info `| Product name  |     body      |     text      |
| `first_name `  | User's first name | body      |   text        |
| `email `       | User's email  |   body        |   text        |


### Example Request

```json
{
  "data": {
    "attributes": {
      "order_id": 6,
      "payment_id": 2,
      "order_number": "0PYPVEqTerQSyQGW4lvt6",
      "payment_method_id": 1,
      "amount": "800.00",
      "product_info": "Nimbus 2000 broom Brown",
      "first_name": "Hermoine",
      "email": "hermoine@aviabird.com"
    }
  }
}
```

### Example Response
<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "url": "https://test.payu.in/_payment_options?mihpayid=<some_id>"
}
```
</details>


## COD(cash on delivery) Payment mode.

---
> TODO: Please add more information as needed.

This api will place the order as COD(cash on delivery)

```text
POST api/v1/payment/cod_payment
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter      | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | -------------  |
| order_id      | Order Id      |    body       | integer        |


### Example Request

```json
{
  "data": {
    "type": "orders",
    "attributes": {
      "order_id": 7
    }
  }
}
```
> TODO: COD order state needs to be updated to `confirm`.

### Example Response
<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "attributes": {
      "adjustment_total": null,
      "billing_address": {
        "address_line_1": "Hampstead Garden Suburb, Heathgate",
        "address_line_2": null,
        "alternate_phone": null,
        "city": "London",
        "country_id": 80,
        "first_name": "Hermoine",
        "id": "eb8bbc2e-61e2-4e67-8190-72e07f65cff5",
        "last_name": "Grengers",
        "phone": "1212121212",
        "state_id": 1493,
        "zip_code": "123456"
      },
      "item_count": 1,
      "number": "JsjUbIJexU6BZR6tWkQwy",
      "order_total_amount": {
        "amount": "1000.00",
        "currency": "USD"
      },
      "promot_total": null,
      "shipping_address": {
        "address_line_1": "Hampstead Garden Suburb, Heathgate",
        "address_line_2": null,
        "alternate_phone": null,
        "city": "London",
        "country_id": 80,
        "first_name": "Hermoine",
        "id": "468b0c6c-560c-480b-ad18-a0ddb233f650",
        "last_name": "Grengers",
        "phone": "1212121212",
        "state_id": 1493,
        "zip_code": "123456"
      },
      "state": "payment",
      "user_id": 5
    },
    "id": "7",
    "links": {
      "self": "/orders/7"
    },
    "relationships": {
      "line_items": {},
      "packages": {},
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
