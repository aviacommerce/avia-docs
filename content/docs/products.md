---
id: products
title: Products
permalink: docs/products.html
prev: cdn-links.html
next: orders.html
---

### Overiew

`Product` entity represent unique sellable product in store.

Product have following attributes:

`name` : Product name  
`description` :  
`meta_description` :  
`meta_keywords` :  
`meta_title` :  
`selling_price` :  
`max_retail_price` :  

To understand how variant product differ from simple product, you must understand `Option Types`, `Option values` and `Variation themes`

-------

### Option Types and Option Values

Option type are product attributes that can be used to create variants. A typical example of Option Types
is `size` which can have values like `Small`, `Large`, `Medium` etc. Based on values of Option types we can
create variant for product.

A product can have many Option types.

--------

### Variation

Variaiton is relationship where product are related to each other, but differ by some attributes.

**Example:**

- Products of clothing category differ by size (small, medium, large, extra-large)
- Products that differ in colors (black, blue, gray)

When we create product that have variation, we have components:
- **Parent product:** This product is not sellable and displayed in search result.
- **Child product:** Product that are actually sellable but relate to parent product using `variaton theme`
- **Variation theme:** Theme creates relationship between parent and child product.

Variaiton helps in creating products that differ by some attributes like `size`, `color`.

--------

### Variation themes

Variaiton theme defines how the products differ from each other. Variaiton theme can have many `Option Types`.

--------

### Variants

Variants are product that differ by some attributes. Variants are `Child Products` component of variation relationship. To create variants it is necessary to select variaiton theme and it is associated with parent product.


> Note: Variant are also product as they are self referntial entity.
--------

### Images
--------

Product can have many images. Also variant is aslo product entity, we can assign different images to parent and child products.

Images can be uploaded `locally` and `AWS S3` and uses [Arc](https://github.com/stavro/arc) library for storage.

### Currency support
--------


### Taxon and Taxonomies

Taxonomy help in creating product categories.

**Taxonomy :** Hierarchical list of Taxons. Taxonomy is associated to one root taxon.

**Taxon :** Taxon is single node in the category tree. Each taxon can many child taxon associated with it. A taxon can be associated with many Products.

`Nested Set Model` is used to create category hierarchy. All the logic for Taxon opertion is handled by [as_nested_set](https://github.com/SagarKarwande/as_nested_set) library.
