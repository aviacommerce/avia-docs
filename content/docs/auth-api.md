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

#### Request

```json
{
  "data":{
    "type":"user",
    "attributes":{
      "first_name":"Harry",
      "last_name":"Potter",
      "email":"harry@snitch.com",
      "password":"harry123",
      "password_confirmation":"harry123"
    }
  }
}
```

| Parameter                                 | Description                              | Parameter Type | Data Type |
|-------------------------------------------|------------------------------------------|----------------|-----------|
| `data[attributes][first_name]`            | First name of user                       | body           | string    |
| `data[attributes][last_name]`             | Last name of user                        | body           | string    |
| `data[attributes][email]`                 | User email                               | body           | string    |
| `data[attributes][password]`              | Password should have minimum length of 8 | body           | string    |
| `data[attributes][password_confirmation]` | Password confirmation                    | body           | string    |

#### Response

<details>
<summary>Example response (STATUS: 200 OK)</summary>
<br>

```json
{
  "data":{
    "attributes":{
      "email":"harry@snitch.com",
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

#### Request

```json
{
  "email": "harry@snitch.com",
   "password": "harry123"
}
```

| Parameter                                 | Description                              | Parameter Type | Data Type |
|-------------------------------------------|------------------------------------------|----------------|-----------|
| `email`                                   | User email                               | body           | string    |
| `password`                                | User password                            | body           | string    |

#### Response

<details>
<summary>Example response (STATUS: 200 OK)</summary>
<br>

```json
{
  "data":{
    "attributes":{
      "email":"harry@snitch.com",
      "first_name":"Harry",
      "id":4,
      "last_name":"Potter",
      "token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzbml0Y2hfYXBpIiwiZXhwIjoxNTM4MTEzNzE2LCJpYXQiOjE1Mzc4NTQ1MTYsImlzcyI6InNuaXRjaF9hcGkiLCJqdGkiOiI1OWFmZjViYS1jYWNhLTQxMmEtYmIwMy0yMDJlZWQwMjNmMTAiLCJuYmYiOjE1Mzc4NTQ1MTUsInN1YiI6IjQiLCJ0eXAiOiJhY2Nlc3MifQ.aWEUeDjp3h7j5W1PnzVTW_-VwBLysZFeqOyr_xKM3o7vf85S62wjUp4KtnAxUReRhIIL3-v6tT3cCh2_mz4biQ"
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

#### Response

Example response (STATUS: 204 OK)

NA
