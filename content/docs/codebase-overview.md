---
id: codebase-overview
title: Codebase Overview
layout: contributing
permalink: docs/codebase-overview.html
prev: how-to-contribute.html
next: design-principles.html

---

This section will give you an overview of the AviaCommerce codebase organization, its conventions, and the implementation.

> NOTE:
> 
>Codename of aviacommerce is Snitch. We have used this name heavily across the project. 
>Developers should not get confused with it when they come across the name. 
>We plan to make the change from Snitch to Avia but it might take time. 
>This is not a priority at the moment internally. 


## Folder organisation

### Schemas

Schema files hold the table related information as specified in the phoenix framework.

### Models

Model files hold the data accessibility part of any table. The ecto queries would go in models generally.

### Domain

Domain serve the purpose of interactions(Public API's) with the other domains. Domain also holds code for any other computation and modifications of data which was accessed from the model layer.

> Note:
>
> **Domain** is entry into any module. **Model** is used for accessing data from the DB. **Schema** defines the tables and it's contraints. It's like a layered architecture with models facing the outside world, schema making the core and models sandwiched in between domain and schema.

## Tests

The tests structure is almost same as the code structure. 

## Snitch Core

Snitch core as is evident from the name holds all the core functionalities of rules of the systems. Snitch core is used by all the other applications like admin, api and others(future) to access the heart of the system. 

Holds most schemas, models and logic for the core system.

## Admin application

This serves the backoffice purpose of the aviacommerce. The whole aviacommerce system can be managed using the admin application.

Some of the functionalities of admin application are:-
* Create and list products along with multiple variants.
* Manage and fullfill orders.
* Create custom payment methods and integrations.
* Manage and update inventory.
* Create zones and shipping rules.
* General settings 
* Create taxonomy
* and many more.

## API application

API application has all the endpoints which are required to run the store front for now. This follows [JSONAPI specs](http://jsonapi.org/).

## Learn by Example 

We'll try to explain how [products](products.html) are organised in codebase for better understanding.

