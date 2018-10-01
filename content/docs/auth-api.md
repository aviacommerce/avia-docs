---
id: auth-api
title: Auth API
layout: docs
category: Reference
permalink: docs/auth-api.html
next: products-api.html
---

## Signup

Signup a new user

```
POST /api/v1/register
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Example Request

```json
{
 "data": {
  "type": "user",
  "attributes": {
    "first_name": "Harry",
    "last_name": "potter",
    "email": "harry_potter@aviabird.com",
    "password": "somepassword",
    "password_confirmation": "somepassword"
  } 
 } 
}
```

### Parameters


| Parameter                                 | Description                              | Parameter Type | Data Type |
|-------------------------------------------|------------------------------------------|----------------|-----------|
| `data[attributes][first_name]`            | First name of user                       | body           | string    |
| `data[attributes][last_name]`             | Last name of user                        | body           | string    |
| `data[attributes][email]`                 | User email                               | body           | string    |
| `data[attributes][password]`              | Password should have minimum length of 8 | body           | string    |
| `data[attributes][password_confirmation]` | Password confirmation                    | body           | string    |

### Example Response

<details>
<summary>Example response (STATUS: 200 OK)</summary>
<br>

```json
{
  "data":{
    "attributes":{
      "email":"harry_potter@aviabird.com",
      "name":"HarryPotter"
    },
    "id":"4",
    "links":{
      "self":"/users/4"
    },
    "type":"user"
  },
  "jsonapi":{
    "version":"1.0"
  }
}
```

</details>


## Signin

Signin API

```
POST /api/v1/login
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Example Request

```json
{
  "email": "harry_potter@aviabird.com",
   "password": "somepassword"
}
```
### Parameters
| Parameter                                 | Description                              | Parameter Type | Data Type |
|-------------------------------------------|------------------------------------------|----------------|-----------|
| `email`                                   | User email                               | body           | string    |
| `password`                                | User password                            | body           | string    |

### Example Response

<details>
<summary>Example response (STATUS: 200 OK)</summary>
<br>

```json
{
  "data":{
    "attributes":{
      "email":"harry_potter@aviabird.com",
      "first_name":"Harry",
      "id":4,
      "last_name":"Potter",
      "token":"some_string_token"
    },
    "id":4,
    "type":"user"
  }
}
```

</details>

## Logout

Logout API

```
POST /api/v1/logout
Content-Type: application/vnd.api+json
Accept:  application/vnd.api+json
Authorization: Bearer token
```

### Example Response

Example response (STATUS: 204 OK)

NA
