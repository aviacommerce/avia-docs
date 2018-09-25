---
id: apis-getting-started
title: Getting started with Avia APIs
layout: docs
category: Reference
permalink: docs/apis-getting-started.html
next: products-api.html
previous: payment-state-machine.html

---

A guide on how to get started with AviaCommerce APIs.


## What are Avia APIs?

The Avia web API framework provides integrators and developers the means to use web services that communicate with the AviaCommerce system. Key features include:

* [JSON API](http://jsonapi.org/) spec for better performances
* Authentication using JWT tokens.
* Customer API facing endpoints.
* The framework is based on CRUD(create, read, update, delete) & search model.

>Note
>
>We just support endpoints and actions for store-front **NOT** the admin functionality. 
>The avia admin interface should be sufficient for a long time and hence the 
>need for admin endpoints doesn't make much sense at this moment. However, we
>are open to considering it in case there is good use case for it.

## What can I do with the Avia web APIs?

There are many use cases for the web API's. For example:

* Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.
* Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) back-end systems, such as Salesforce or Xero.
* Integrate with a CMS (Content Management System).
* Create JavaScript widgets in the Aviacommerce/Custom storefront or on the Admin panel. The widget makes AJAX calls to access services.

## How do I get started?

Cloning the [aviacommerce](https://github.com/aviacommerce/avia) repo from github and [installation](/docs/backend-install.html) would be the way to get started with testing and then consuming the API's.