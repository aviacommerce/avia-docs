---
id: users
title: Users
layout: docs
category: Reference
permalink: docs/users.html
next: payments.html
prev: orders.html
---

## Overview
The `user` model represents all the users in the store. The store can have different
types of `users` depending on the roles assigned to them. The two main `roles` are
`admin` and the `user` where the admin is the store manager whereas, the user is any customer.
For more details on `roles` see the [`Roles`][4] section.

The important attributes of the `user` model are:
- `first_name`: the first name of the user.
- `last_name`: the last name of the user.
- `email`: email with which the user has signed up.
- `password_hash`: password hash for the user password.

User Relationships:
  - **_belongs to_** `role`: Associates a role with the user.

To see other attributes of the `user` model see, [`User`][1].

Modules for handling the business logic for `user` model.
- [`Snitch.Data.Schema.User`][1]: Defines the `user` schema.
- [`Snitch.Data.Model.User`][5]: Handles the CRUD functions.
- [`Snitch.Domain.Account`][6]: Exposes account related functionality for users.

## Roles
The `role` model plays an important part in implementing authorization for the store
using an approach similar to [RBAC(Role Based Access Control)][2].

The role model has the following attributes:
- `name`: name of the role.
- `description`: description of the role.

Relationships:
- **_many to many_** `permissions` through `role_permissions`: a set of permissions
associated with the role. The relationship is a **_many to many_** since the same
permission can be associated with many roles. The middle table used for the association
is `role_permission`.

Modules for handling business logic related to `role` model:
- [`Snitch.Data.Schema.Role`][7]: Defines the `role` schema.
- [`Snitch.Data.Model.Role`][8]: CRUD functions for role model.

A `user` who is assigned a particular `role` will have all the `permissions` assigned
to that particular role. The `user` with admin role has access to all the actions
in the `store`.

## Permissions
Permissions are basically a set of actions that can be performed on any entity in
the system by a `user` with a particular role.

The `permission` model has the following attributes:
- `code`: a unique string code to identify the permission.
- `description`: holds the description for the permission.

Modules for handling business logic related to `permission` model:
- [`Snitch.Data.Schema.Permission`][9]: Defines the `permission` schema.
- [`Snitch.Data.Model.Permission`][10]: CRUD functions for permission model.

Relationships:
- **_has many_** `role_permissions`: `permission` model has **_many to many_** relationship
with the `role` model through the middle table `role_permissions`.

The permissions and roles can be easily configured from the admin panel. However, the
`actions`(controller actions) that needs to be assigned to the `permission` are at present
being handled through the [`role_manifest.yml`][3]. This approach appears to be a little
limiting at the moment. But, this is a one-time configuration. We are also looking at other
approaches to achieve the functionality.

An association between a permission and a set of controllers actions allows a user
with some role having that particular permission to access the associated
controller functions.

```
  user --> has one --> role
  role --> has many --> permissions
  permission --> associated with --> many controllers functions
  user --> can access those controllers functions
```

In order to create a new association, first of all, a permission needs to be
created in the system from the admin panel. Once the permission is created then it can
be updated in the role_manifest.yml.

### Example

    First of all we create a permission with the code "manage_orders" from the admin
    panel. The permission can be assigned a set of controller actions in role_manifest.yml
    as follows:

    --------- role_manifest.yml-------------
    - manage_orders:
        Elixir.AdminAppWeb.OrderController:
          - edit
          - create
          - new
          - show
          - list
        Elixir.AdminAppWeb.ProductController:
          - show
          - list
    -----------------------------------------

    The permission allows to manage everything related to the order but only read
    operations related to the product.

    After this, we will create a role from the admin panel, let's call it "order_manager"
    who manages the order entity. While creating this role it can be assigned the permission "manage_orders".

    A user XYZ can then be assigned the role "order_manager" and he can perform
    the above-mentioned controller actions.


[1]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/user.ex
[2]: https://en.wikipedia.org/wiki/Role-based_access_control
[3]: https://github.com/aviacommerce/avia/blob/develop/apps/admin_app/priv/role_manifest.yaml
[4]: /docs/users.html#roles
[5]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/user.ex
[6]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/domain/account/account.ex
[7]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/roles.ex
[8]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/role.ex
[9]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/permission.ex
[10]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/permission.ex
