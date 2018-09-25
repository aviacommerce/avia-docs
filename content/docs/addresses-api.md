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
  "data": [{
    "type": "address",
    "id": 3,
    "attributes": {
        "address_1": "street 44",
        "address_2": "diagon alley",
        "name": "Harry Potter",
        "pincode": 0120120,
        "state_id": 456,
        "country_id": 5613
        }
    }]
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
      "address_line_1": "Amnora Mall hadapsar, pune",
      "address_line_2": "Jalgaon",
      "first_name": "Gopal",
      "last_name": "Shimpi",
      "zip_code": "411028",
      "state_id": 1987,
      "country_id": 105,
      "city": "Pune",
      "phone": "9029370273",
      "alternate_phone": "9029370273"
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

<details><summary> Example response (STATUS: 200 OK)</summary>

```json
{
  "data": {
    "type": "address",
    "attributes": {
      "address_line_1": "Amnora Mall hadapsar, pune",
      "address_line_2": "Jalgaon",
      "first_name": "Gopal",
      "last_name": "Shimpi",
      "zip_code": "411028",
      "state_id": 1987,
      "country_id": 105,
      "city": "Pune",
      "phone": "9029370273",
      "alternate_phone": "9029370273"
    }
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
      "id": 4,
      "billing_address": {
        "address_line_1": "Ghorpadi lane no 2",
        "address_line_2": "Jalgaon",
        "first_name": "Gopal",
        "last_name": "Shimpi",
        "zip_code": "411028",
        "state_id": 1987,
        "country_id": 105,
        "city": "Pune",
        "phone": "9029370273",
        "alternate_phone": "9029370273"
      },
      "shipping_address": {
        "address_line_1": "Ghorpadi lane 2",
        "address_line_2": "Jalgaon",
        "first_name": "Gopal",
        "last_name": "Shimpi",
        "zip_code": "411028",
        "state_id": 1987,
        "country_id": 105,
        "city": "Pune",
        "phone": "9029370273",
        "alternate_phone": "9029370273"
      }
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
    "type": "address",
    "attributes": {
      "address_line_1": "Amnora Mall hadapsar, pune",
      "address_line_2": "Jalgaon",
      "first_name": "Gopal",
      "last_name": "Shimpi",
      "zip_code": "411028",
      "state_id": 1987,
      "country_id": 105,
      "city": "Pune",
      "phone": "9029370273",
      "alternate_phone": "9029370273"
    }
  }
}
```

</details>
