---
id: users
title: Users
layout: docs
category: Reference
permalink: docs/users.html

---

## Overview
The `user` model represents all the users in the store. The store can have different
types of `users` depending on the roles assigned to them. The two main `roles` are
`admin` and the `user` where admin is the store manager whereas, the user is any customer.
For more details on `roles` see the `Role`s section.

Some important fields of the `user` model are:
- `first_name`
- `last_name`
- `email`
- `password`
- `password_hash`
- `role_id`

These fields are pretty self explanatory from their names. To see other fields
in the `user` model see, [`User`][1].

## Roles
The `role` model plays an important part in implementing authorization for the store
using an approach known similar to [RBAC(Role Based Access Control)][2].

The role model attributes:
- `name`: name of the role.
- `description`: description of the role.

Relationships:
- _has many_ `permissions`: a set of permissions associated with the role.

A `user` who is assigned a particular `role` will have all the `permissions` assigned
to that particular role. The `user` with admin role has access to all the actions
in the `store`.

## Permissions
Permissions are basically a set of actions that could be performed on any entity in
the system by a `user` with a particular role.  
Though the permissions and roles can be easily configured from the admin panel. The
`actions` that needs to be assigned to the `permission` is at present being handled
through the [`role_manifest.yml`][3].  
This appears a little limiting however, this is usually a one time configuration.

An association between a permission and set of controllers(including functions)
allows a user with some role having that particular permission to access the associated 
controller functions.
```
  user --> has one --> role --> has many --> permissions --> associated with many controllers
  => user --> can access those controllers
```

In order to create a new association first of all a permission needs to be
created in the system from the admin app and then it needs to be updated
in the role_manifest.yml.

Example
Let's say there is a role "order_manager", let the permission created
from the application be "manage_orders".  
The permission "manage_orders" can be connected with controller functions
in the following manner:

```
 - manages_orders:
     Elixir.AdminAppWeb.OrderController:
       - edit
       - create
       - new
       - show
       - list
     Elixir.AdminAppWeb.ProductController:
       - show
       - list
 ```
 Then a user with role "order_manager" will be able to access the above mentioned
 resources.

[1]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/user.ex
[2]: https://en.wikipedia.org/wiki/Role-based_access_control
[3]: https://github.com/aviacommerce/avia/blob/develop/apps/admin_app/priv/role_manifest.yaml
