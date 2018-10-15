---
id: addresses-api
title: Address API
layout: docs
category: Reference
permalink: docs/addresses-api.html
---

> Note: We have used [ExRegion](https://github.com/oyeb/ex_region) library for countries & states list. 


## List Address


This api fetches the list of user's saved addresses. User can select one of addresses for delivery or edit the address in profile section.

```
GET api/v1/addresses
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

## Add/save user address



This api is used to save an address for the signed in user.

```
POST /api/v1/addresses
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter      | Description   | Parameter Type| Data Type     |
| -------------  | ------------- | ------------- | ------------- |
| address_line_1    |User address     | body          |   text   |
| address_line_2    |User address     | body          |   text   |
| first_name        | First name of user | body | text           |       
| last_name         | Last name of user| body | text             |
| zip_code          | zipcode of user address | body | text      |  
| state_id          | state for this address | body | integer    |    
| country_id        | country for this address | body | integer  |   
| city              | city for this address  | body | text       |   
| phone             | phone number for user | body | text        |      
| alternate_phone   | alternate phone number | body | text       |     
| relationships[user]:[data]:[id]  | user id of user | body | integer |

### Example Request

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

## Select Address


This api is used to bind an address to a user's current order for delivery.

```text
POST api/v1/orders/:id/select_address/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter     | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | ------------- |
| billing_address[address_line_1]  |User address| body| text  |
| billing_address[address_line_2]  |User address | body | text  |
| billing_address[first_name]  | First name of user| body |  text  |
| billing_address[last_name]  | Last name of user | body | text  |  
| billing_address[zip_code]  | zipcode of user address | body | text  | 
| billing_address[state_id]  | state for this address | body | integer  | 
| billing_address[country_id]  | country for this address | body | integer  |
| billing_address[city]  | city for this address | body | text  | 
| billing_address[phone]  | phone number for user | body | text  |   
| billing_address[alternate_phone]  | alternate phone number  | body | text  | 
| shipping_address[address_line_1]  | User address | body | text  |
| shipping_address[address_line_2]  | User address | body | text  | 
| shipping_address[first_name]  | First name of user  | body | text | 
| shipping_address[last_name]  | Last name of user | body | text  |  
| shipping_address[zip_code]  | zipcode of user address  | body  | text  |
| shipping_address[state_id]  | state for this address| body | integer  | 
| shipping_address[country_id]  | country for this address | body | integer  | 
| shipping_address[city]  | city for this address| body | text  |
| shipping_address[phone]  | phone number for user  | body | text  |
| shipping_address[alternate_phone]  | alternate phone number | body | text  |
| relationships[user]:[data]:[id]  | user id of user |  body  | integer| 

### Example Request

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

### Examples Response
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

## Edit/Update User Address



This api is used to edit an address of a user.

```text
Put api/v1/addresses/:address_id
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter     | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | ------------- |
| address_id    | id of address | path params   | inetger       |
| address_line_1| User address  | body          | text          |
| address_line_2| User address  | body          | text          |
| first_name    | First name of user | body      | text          |
| last_name     | Last name of user  | body      | text          |
| zip_code      | zipcode of user address  | body     | text     |
| state_id      | state for this address   | body     | integer  |
| country_id    | country for this address | body     | integer  |
| city          | city for this address    | body     | text     |
| phone         | phone number for this address   | body     | text     |
| id            | id of address  | body     | integer     |



### Examples Request

```
{
  "data": {
    "type": "address", 
     "id": 82,
    "attributes": { 
        "address_line_1": "4, paret drive",
        "address_line_2": "Little Whinging",
        "first_name": "Harrp",
        "last_name": "Potter",
        "zip_code": "123456",
        "state_id": 1493,
        "country_id": 80,
        "city": "Little Whinging",
        "phone": "1212121212",
        "alternate_phone": "1212121212"
    }
  }
}
```

### Examples Response
<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "attributes": {
      "address_line_1": "4, paret drive",
      "address_line_2": "Little Whinging",
      "alternate_phone": "1212121212",
      "city": "Little Whinging",
      "country": {
        "iso_name": "United Kingdom",
        "name": "United Kingdom"
      },
      "country_id": 80,
      "first_name": "Harrp",
      "last_name": "Potter",
      "phone": "1212121212",
      "state": {
        "code": "GB-LND",
        "name": "London, City of"
      },
      "state_id": 1493,
      "zip_code": "123456"
    },
    "id": "82",
    "links": {
      "self": "/addresses/82"
    },
    "type": "address"
  },
  "jsonapi": {
    "version": "1.0"
  }
}
```
</details>


## Delete User Address

This api is used to delete an address of a user.

```text
Delete api/v1/addresses/:address_id
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: Bearer token
```

### Parameters

| Parameter     | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | ------------- |
| address_id    | id of address | path params   | text          |


### Examples Response
<summary>(STATUS: 204 OK)</summary>

```json
NA
```

## List Countries


This api fetches the list of all countries.

```text
GET /api/v1/countries/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```
### Example Response

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


## List States


This api fetches the list of all states for respective country(if any).

```text
GET /api/v1/countries/:country_id/states
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Parameters

| Parameter     | Description   | Parameter Type| Data Type     |
| ------------- | ------------- | ------------- | ------------- |
| country_id    | country id for states  | path params | integer |


###  Example Response

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
