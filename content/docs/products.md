---
id: products
title: Products
permalink: docs/products.html
prev: cdn-links.html
next: orders.html
---

## Overview

`Product` entity represents the unique sellable product in the store.

Product have following attributes:

`name` : the name for the product  
`description` : a brief overview of the product that describes its features  
`meta_description` : A description of product useful in search engine optimization (SEO)  
`meta_keywords` : Words separated by commas for search engine optimization (SEO)  

To understand how variant product differ from simple product, you must understand `Option Types`, `Option values` and `Variation themes`

-------

### Option Types and Option Values

Option type are product attributes that can be used to create variants. A typical example of Option Types
is `size` which can have values like `Small`, `Large`, `Medium` etc. Based on the values of Option types we can
create variants for a product.

A product can have many Option types.

--------

### Variation

Variation is a relationship where the products are related to each other but differ by some attributes.

**Example:**

- Products of clothing category differ by size (small, medium, large, extra-large)
- Products that differ in colors (black, blue, gray)

When we create a product that has variations, then we have the following components:
- **Parent product:** This product is not sellable and displayed in search result.
- **Child product:** Products that are actually sellable but relate to the parent product using a `variation theme`
- **Variation theme:** Theme creates a relationship between parent and child product.

Variation helps in creating products that differ by some attributes like `size`, `color`.

--------

### Variation themes

Variation theme defines how the products differ from each other. Variation theme can have many Option Types. For eg. If a product is a garment then it should be associated with a variation theme `colour_size`. It's obvious from the name that this variation theme would have 2 option types `colour` and `size`. Variations would be permutations of these 2 option types. 

Similarly, various types of products can be created based on variation theme for eg. digital products, very heavy products etc. However, all the products are considered to be deliverable products as of now. 

--------

### Variants

Variants are the products that differ by some attributes. Variants are Child Products component of variation relationship. To create variants it is necessary to select a variation theme and it is associated with the parent product.


> Note: Variants are also product as they are self-referential entity.
--------

### Images
--------

The product can have many images. Also variant is also a product entity, we can assign different images to parent and child products.

Images can be uploaded `locally` and `AWS S3` and uses [Arc](https://github.com/stavro/arc) library for storage.


### Taxon and Taxonomies

A taxonomy helps in creating the product categories.

**Taxonomy :** Hierarchical list of Taxons. Taxonomy is associated to one root taxon.

**Taxon :** Taxon is a single node in the category tree. Each taxon can have many child taxons associated with it. A taxon can be associated with many Products.

`Nested Set Model` is used to create category hierarchy. All the logic for a Taxon's operation is handled by [as_nested_set](https://github.com/SagarKarwande/as_nested_set) library.
