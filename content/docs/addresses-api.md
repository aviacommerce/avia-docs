---
id: addresses-api
title: Address API
layout: docs
category: Reference
permalink: docs/addresses-api.html
---

> These api's are for signed in user only

### List Address

---

This api fetches the list of user's saved addresses. User can select one of addresses for delivery or edit the address in profile section.

```text
GET /addresses/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": [
    {
      "attributes": {
        "address_line_1": "4 Privet Drive",
        "address_line_2": "Little Whinging",
        "alternate_phone": "1212121212",
        "city": "Surrey",
        "country": {
         "iso_name": "United Kingdom",
          "name": "United Kingdom"
        },
        "country_id": 80,
        "first_name": "Harry",
        "last_name": "Potter",
        "phone": "1212121212",
        "state": {
          "code": "GB-LND",
          "name": "London, City of"
        },
        "state_id": 1493,
        "zip_code": "123456"
      },
      "id": "4",
      "links": {
        "self": "/addresses/4"
      },
      "type": "address"
    },
    {
      "attributes": {
        "address_line_1": "Hampstead Garden Suburb, Heathgate",
        "address_line_2": "Hampstead Garden Suburb, Heathgate",
        "alternate_phone": null,
        "city": "London",
        "country": {
          "iso_name": "United Kingdom",
          "name": "United Kingdom"
        },
        "country_id": 80,
        "first_name": "Hermoine",
        "last_name": "Grengers",
        "phone": "1231231231",
        "state": {
          "code": "GB-LND",
          "name": "London, City of"
        },
        "state_id": 1493,
        "zip_code": "123456"
      },
      "id": "5",
      "links": {
        "self": "/addresses/5"
      },
      "type": "address"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```

</details>

### Add/save user address

---

This api is used to save an address for the signed in user.

```
POST /api/v1/addresses
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

#### Params

| param             | type          | description               |
| -------------     | ------------- | -------------             |
| address_line_1    | text          | User address              |
| address_line_2    | text          | User address              |
| first_name        | text          | First name of user        |
| last_name         | text          | Last name of user         |
| zip_code          | text          | zipcode of user address   |
| state_id          | integer       | state for this address    |
| country_id        | integer       | country for this address  |
| city              | text          | city for this address     |
| phone             | text          | phone number for user     |
| alternate_phone   | text          | alternate phone number    |
| relationships[user]:[data]:[id]  | integer  | user id of user |

#### Example Request

```json
{
  "data": {
    "type": "address",
    "attributes": {
      "address_line_1": "4 Privet Drive",
      "address_line_2": "Little Whinging",
      "first_name": "Harry",
      "last_name": "Potter",
      "zip_code": "123456",
      "state_id": 1493,
      "country_id": 80,
      "city": "Surrey",
      "phone": "1212121212",
      "alternate_phone": "1212121212"
    },
    "relationships": {
      "user": {
        "data": {
          "id": 4
        }
      }
    }
  }
}
```

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "attributes": {
      "address_line_1": "4 Privet Drive",
      "address_line_2": "Little Whinging",
      "alternate_phone": "1212121212",
      "city": "Surrey",
      "country": {
        "iso_name": "United Kingdom",
        "name": "United Kingdom"
      },
      "country_id": 80,
      "first_name": "Harry",
      "last_name": "Potter",
      "phone": "1212121212",
      "state": {
        "code": "GB-LND",
        "name": "London, City of"
      },
      "state_id": 1493,
      "zip_code": "123456"
    },
    "id": "4",
    "links": {
      "self": "/addresses/4"
    },
    "type": "address"
  },
  "jsonapi": {
    "version": "1.0"
  }
}
```

</details>

### Select Address

---

This api is used to bind an address to a user's current order for delivery.

```text
POST /orders/:id/select_address/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

#### Params

| param  | type | description |
| ------------- | ------------- | ------------- |
| billing_address[address_line_1]  | text  | User address  |
| billing_address[address_line_2]  | text  | User address  |
| billing_address[first_name]  | text  | First name of user  |
| billing_address[last_name]  | text  | Last name of user  |
| billing_address[zip_code]  | text  | zipcode of user address  |
| billing_address[state_id]  | integer  | state for this address  |
| billing_address[country_id]  | integer  | country for this address  |
| billing_address[city]  | text  | city for this address  |
| billing_address[phone]  | text  | phone number for user  |
| billing_address[alternate_phone]  | text  | alternate phone number  |
| shipping_address[address_line_1]  | text  | User address  |
| shipping_address[address_line_2]  | text  | User address  |
| shipping_address[first_name]  | text  | First name of user  |
| shipping_address[last_name]  | text  | Last name of user  |
| shipping_address[zip_code]  | text  | zipcode of user address  |
| shipping_address[state_id]  | integer  | state for this address  |
| shipping_address[country_id]  | integer  | country for this address  |
| shipping_address[city]  | text  | city for this address  |
| shipping_address[phone]  | text  | phone number for user  |
| shipping_address[alternate_phone]  | text  | alternate phone number  |
| relationships[user]:[data]:[id]  | integer  | user id of user  |

#### Example Request

```json
{
  "data": {
    "type": "orders",
    "attributes": {
      "id": "6",
      "billing_address": {
        "address_line_1": "4 Privet Drive",
        "address_line_2": "Little Whinging",
        "first_name": "Harry",
        "last_name": "Potter",
        "zip_code": "123456",
        "state_id": 1493,
        "country_id": 80,
        "city": "Surrey",
        "phone": "1212121212",
        "alternate_phone": "1212121212"
      },
      "shipping_address": {
        "address_line_1": "4 Privet Drive",
        "address_line_2": "Little Whinging",
        "first_name": "Harry",
        "last_name": "Potter",
        "zip_code": "123456",
        "state_id": 1493,
        "country_id": 80,
        "city": "Surrey",
        "phone": "1212121212",
        "alternate_phone": "1212121212"
      }
    },
    "relationships": {
      "user": {
        "data": {
          "id": 5
        }
      }
    }
  }
}
```

#### Response
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
      "state": "address",
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
      "packages": {
        "data": []
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

### List Coutries

---

This api fetches the list of all coutries's.

```text
GET /api/v1/countries/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```
#### Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": [
    {
      "attributes": {
        "iso_name": "Aruba",
        "name": "Aruba"
      },
      "id": "1",
      "links": {
        "self": "/countries/1"
      },
      "relationships": {
        "states": {}
      },
      "type": "country"
    },
    ...
    {
      "attributes": {
        "iso_name": "Zimbabwe",
        "name": "Zimbabwe"
      },
      "id": "249",
      "links": {
        "self": "/countries/249"
      },
      "relationships": {
        "states": {}
      },
      "type": "country"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```
</details>


### List States

---

This api fetches the list of all states for respective country(if any).

```text
GET /api/v1/countries/:country_id/states
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```
#### Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "attributes": {
      "iso_name": "India",
      "name": "India"
    },
    "id": "105",
    "links": {
      "self": "/countries/105"
    },
    "relationships": {
      "states": {
        "data": [
          {
            "id": "1968",
            "type": "state"
          },
          ...
          {
            "id": "2002",
            "type": "state"
          }
        ]
      }
    },
    "type": "country"
  },
  "included": [
    {
      "attributes": {
        "code": "IN-KL",
        "name": "Kerala"
      },
      "id": "1985",
      "type": "state"
    },
    ...
    {
      "attributes": {
        "code": "IN-PB",
        "name": "Punjab"
      },
      "id": "1994",
      "type": "state"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```
</details>
