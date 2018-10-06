---
id: reviews-and-ratings-api
title: Reviews & Rating API
layout: docs
category: Reference
permalink: docs/reviews-and-ratings-api.html
---

## Rating Categories

---
This API returns all available rating categories. We need rating `id` while displaying ratings options.

```text
GET /api/v1/ratings
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```
{
  "data": [
    {
      "attributes": {
        "code": "product",
        "position": 0
      },
      "id": "1",
      "relationships": {
        "rating_options": {
          "links": {
            "related": "/ratings/1/rating_options",
            "self": "/rating_options/1/relationships/rating_options"
          }
        }
      },
      "type": "rating"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```
</details>

## Rating Options

---
This API returns list of `rating options` for a rating category. We need provide rating category `id` as path params.
`Rating Options` has attribute `value` which tells the value of rating. 

eg. if value=4 means rating for product is 4 star.

```text
GET /api/v1/ratings/:id/
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```
{
  "data": {
    "attributes": {
      "code": "product",
      "position": 0
    },
    "id": "1",
    "relationships": {
      "rating_options": {
        "data": [
          {
            "id": "1",
            "type": "rating_options"
          },
          {
            "id": "2",
            "type": "rating_options"
          },
          {
            "id": "3",
            "type": "rating_options"
          },
          {
            "id": "4",
            "type": "rating_options"
          },
          {
            "id": "5",
            "type": "rating_options"
          }
        ],
        "links": {
          "related": "/ratings/1/rating_options",
          "self": "/rating_options/1/relationships/rating_options"
        }
      }
    },
    "type": "rating"
  },
  "included": [
    {
      "attributes": {
        "code": "1",
        "position": 1,
        "value": 1
      },
      "id": "1",
      "type": "rating_options"
    },
    {
      "attributes": {
        "code": "2",
        "position": 2,
        "value": 2
      },
      "id": "2",
      "type": "rating_options"
    },
    {
      "attributes": {
        "code": "3",
        "position": 3,
        "value": 3
      },
      "id": "3",
      "type": "rating_options"
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
        "code": "5",
        "position": 5,
        "value": 5
      },
      "id": "5",
      "type": "rating_options"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```
</details>


## Create a Review

---
This api is used to create a review. To create a review user must be signed in.

```text
POST /api/v1/reviews
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
Authorization: "Bearer token"
```

### Parameters

| Parameter      | Description   | Parameter Type| Data Type     |
| -------------  | ------------- | ------------- | ------------- |
| title          |Title for review  | body       |   text        |
| description    |Description for review  | body |   text        |
| name           | Name of user   | body         | text          |       
| locale         | Users language | body         | text          |  
| relationships[user]:[data]:[id] | user id of user | body | integer |
| relationships[product]:[data]:[id] | products id | body | integer |
| relationships[rating_option]:[data]:[id] | rating_option id | body | integer |


### Example Request

```
{
  "data": {
    "type": "reviews",
    "attributes": {
      "title": "Nice T-Shirt",
      "description": "Nice fabric with nice color. Go for it.",
      "name": "Harry",
      "locale": "en"
    },
    "relationships": {
      "user": {
        "data": {
          "type": "users",
          "id": 2
        }
      },
      "product": {
        "data": {
          "type": "products",
          "id": 4
        }
      },
      "rating_option": {
        "data": {
          "type": "rating_options",
          "id": 5
        }
      }
    }
  }
}
```


### Example Response

<details><summary> Example response (STATUS: 200 OK)</summary>

```
{
  "data": {
    "attributes": {
      "description": "Nice fabric",
      "locale": "en",
      "name": "Harry",
      "title": "Nice T-Shirt",
      "updated_at": "2018-10-03T13:04:32.335780"
    },
    "id": "1",
    "links": {
      "self": "/reviews/1"
    },
    "relationships": {
      "rating_option_vote": {
        "data": {
          "id": "1",
          "type": "rating_option_vote"
        }
      }
    },
    "type": "review"
  },
  "included": [
    {
      "attributes": {},
      "id": "1",
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
        "code": "5",
        "position": 5,
        "value": 5
      },
      "id": "5",
      "type": "rating_options"
    }
  ],
  "jsonapi": {
    "version": "1.0"
  }
}
```
