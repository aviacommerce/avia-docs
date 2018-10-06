---
id: products
title: Products
permalink: docs/products.html
prev: cdn-links.html
next: orders.html
---

## Overview

`Product` entity represent unique sellable product in store.

Product have following attributes:

`name` : name for product  
`description` : brief overview of product that describes it's features  
`meta_description` : A description of product useful in search engine optimization (SEO)  
`meta_keywords` : Words separeted by comma for search engine optimization (SEO)  

To understand how variant product differ from simple product, you must understand `Option Types`, `Option values` and `Variation themes`

-------

### Option Types and Option Values

Option type are product attributes that can be used to create variants. A typical example of Option Types
is `size` which can have values like `Small`, `Large`, `Medium` etc. Based on values of Option types we can
create variant for a product.

A product can have many Option types.

--------

### Variation

Variation is a relationship where the product is related to each other but differs by some attributes.

**Example:**

- Products of clothing category differ by size (small, medium, large, extra-large)
- Products that differ in colors (black, blue, gray)

When we create a product that have variation, then we have the following components:
- **Parent product:** This product is not sellable and displayed in search result.
- **Child product:** Product that are actually sellable but relate to parent product using `variaton theme`
- **Variation theme:** Theme creates relationship between parent and child product.

Variaiton helps in creating products that differ by some attributes like `size`, `color`.

--------

### Variation themes

Variation theme defines how the products differ from each other. Variation theme can have many Option Types.

--------

### Variants

Variants are the product that differs by some attributes. Variants are Child Products component of variation relationship. To create variants it is necessary to select a variation theme and it is associated with parent product.


> Note: Variant are also product as they are self referntial entity.
--------

### Images
--------

Product can have many images. Also variant is also product entity, we can assign different images to parent and child products.

Images can be uploaded `locally` and `AWS S3` and uses [Arc](https://github.com/stavro/arc) library for storage.


### Taxon and Taxonomies

Taxonomy help in creating product categories.

**Taxonomy :** Hierarchical list of Taxons. Taxonomy is associated to one root taxon.

**Taxon :** Taxon is single node in the category tree. Each taxon can many child taxon associated with it. A taxon can be associated with many Products.

`Nested Set Model` is used to create category hierarchy. All the logic for Taxon opertion is handled by [as_nested_set](https://github.com/SagarKarwande/as_nested_set) library.
