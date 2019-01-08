---
id: promotions
title: Promotions
layout: docs
category: Reference
permalink: docs/promotions.html
next: adjustments.html

---

## Overview

Promotions are an essential part of marketing strategies with in E-Commerce.
They are highly responsible for influencing customer spending.
Promotions work by providing a discount on orders as well as line items or, by
providing extra items for the price of one etc.
AviaCommerce at present allows creating promotions based on coupon codes.

Promotion relates to two very important entities `rules` and `actions` which
control how it would be activated and what would be the side effects of the
activation.

When a promotion is applied using a code. A series of checks are performed, see
the [checks][checks] section and then, the [actions][actions] for it are applied.
All the actions getting activated for the promotion create [adjustments][promo-adj]
which are used, to keep a track of the data related to promotion and the order
to which it was applied.

The promotion model has the following attributes:
- `code`: A unique code to identify the promotion. Made available to a user for
  using a promotion.
- `name`: A kind of label to identify the `promotion` with.
- `starts_at`: The time at which the promotion will start.
- `expires_at`: The time at which the promotion will end.
- `usage_limit`: This is used to set the number of times this code can be used
    through out it's life for all the users.
- `current_usage_count`: Tracks the number of times the promotion has been used.
- `match_policy`: The policy used while checking for rules of an action, an
  `all` policy means all the rules should be satisfied whereas an `any` policy
  would require any one of them to be satisfied.
- `active?`: Used to mark the promotion active or inactive.
- `archived_at`: This is used to check if a promotion is archived. An archived
  promotion means it is no longer active and is present only for the record.

Relationships
- **_has many_** `rules`: A set of rules for the promotion to be checked before
applying the promotion.
- **_has many_** `actions`: A set of actions to be applied if all the rules are
satisfied for the promotion.

#### Important modules:
[`Snitch.Data.Model.Promotion`][1]: Exposes CRUD for promotions alongwith other
APIs.
[`Snitch.Data.Schema.Promotion`][2]: Schema for promotion.

### Note
Promotion comes with usual CRUD operations. However, if a promotion is _ongoing_
or _archived_ it **cannot be updated**. Also, a promotion which has orders
associated with it can not be deleted as they hold historical data for the
adjustments made. These promotions can be archived though.

## Eligibility Checks

A series of checks are used to assess if the promotion can be applied to the
supplied order. These checks are further sub-divided into `promotion level checks`
and `order level checks`.

### Promotion Applicability Checks
These are the first level of checks which happen at the promotion level. They are:
- `valid_coupon_check`: checks if the supplied coupon code is valid.
- `promotion_active`: checks if the promotion is active.
- `promotion_actions_exist`: checks if actions exist for the promotion.
- `starts_at_check`: checks if the promotion has started.
- `expires_at_check`: checks if the promotion is not expired.
- `usage_limit_check`: Checks for `usage_limit` for the promotion. The store
  can set a specific number of times the promotion can be used. In case it is not
  set then `usage_limit` is assumed to be infinite.

These checks are applied in the sequence shown above.

#### Concerned Module:
[`Snitch.Data.Model.Promotion.Applicability`][3]

### Order Level Checks

Once the promotion level checks pass, the next set of checks which are directly
associated with the order and line_items are assessed.

The different checks are:
- `promotion_applied`: Checks if the promotion is already applied to the order.
- `valid_order_state`: A promotion can be applied to order in only certain order
states, they are evaluated at this stage.
- `order_promotionable`: An order is considered `promotionable` if it contains
  at least one `promotionable` product as line item. If no `promotionable`
  products are found the order is ineligible for promotion.
- `rules_check`: Checks the order against the rules defined for the promotion as
  per the match policy defined for the promotion. See [rules][rules]

  The checks follow the sequence mentioned above.

#### Concerned Module
  [`Snitch.Data.Model.Promotion.OrderEligibility`][4]

## Rules

Promotion rules are checks that can be set for a promotion. The rules can
be combined in unique ways to create sophisticated promotions.

The supplied order is assessed against the `rules` to see if, they are fulfilled
by the order as per the **match policy** for the promotion.

The match policies present are:
- `all`: All the rules of the promotion should be satisfied by the order.
- `any`: Any one of the rules should be satisfied by the order.

Promotion rules added at present:
- `Order Total Rule`: The supplied order total should meet the criteria
  set by the rule.
  [`Snitch.Data.Schema.PromotionRule.OrderTotal`][5]
- `Product Rule`: Checks if the products specified in the rule are present
  in the order.
  [`Snitch.Data.Schema.PromotionRule.Product`][6]

The `promotion rule` is a generic model which has the following attributes:
  [`Snitch.Data.Schema.PromotionRule`][7]

- `name`: Name of the rule.
- `module`: Module which handles the logic for the rule.
- `preferences`: A map which stores the data required for handling logic related
  to the rule.

To register a new rule see [Register New Rule][reg_new_rule] section.

## Actions

Actions are applied to an order for a promotion if all the eligibility
checks pass.
An action of type `free shipping` will remove the shipping cost for
the order whereas a discount action will provide some adjustment on the
total order price.
An action can be on the entire order or individual line items depending on
the type of action. The actions create adjustments for the order to keep a
track of the discount offered due to that particular action.

AviaCommerce has the following promotion actions:
- `Order Action`: When order action is applied, an adjustment is calculated based
  on the rules set by the action. It makes use of the `calculators` to calculate the amount to be adjusted.
  [`Snitch.Data.Schema.PromotionAction.OrderAction`][8]

- `Line Item Action`: It creates adjustments for individual line items for
  an order. It checks if the line item is actionable using the
  `line_item_actionable?` function in `Snitch.Data.Model.Promotion`. It makes use of the `calculators` to calculate the amount to be adjusted.
  [`Snitch.Data.Schema.PromotionAction.OrderAction`][9]

The `promotion action` is a generic model which has the following attributes:
  [`Snitch.Data.Schema.PromotionRule`][7]

- `name`: Name of the action.
- `module`: Module which handles the logic for the action.
- `preferences`: A map which stores the data required for handling logic related
  to the action.

To register a new action see [Register New Action][reg_new_action] section.

## Promotion Adjustments

When the actions of a promotion are applied to the order, adjustments are
created, see [Adjustments][adjustments]. But, adjustments are polymorphic and,
they are associated with promotions using a middle table
"snitch_promotion_adjustments". It is handled by the module
`Snitch.Data.Schema.PromotionAdjustment`

The promotion adjustments has the following attributes:
- **belongs_to** `order`: order for which adjustment happened.
- **belongs_to** `promotion`: promotion for which the adjustment was created.
- **belongs_to** `promotion_action`: action which led to the adjustment.
- **belongs_to** `adjustment`: reference to the adjustment created.

The above fields together hold all the data with respect to an adjustment
created due to an action. It allows to retrieve all the data related to
adjustments of an order due to a promotion.

## Register New Rule
New promotion rules can be added to Aviacommerce by following the below
mentioned steps.

- All the promotion rules need to adopt the `Snitch.Data.Schema.PromotionRule`
  behaviour by using the syntax.
  ```
  use Snitch.Data.Schema.PromotionRule
  ```
- You need to define an `embedded schema` to store the data that would be
  required by the rule
  ```
    embedded_schema
      field(:field_1)
      field(:field_2)
    end
  ```
- You also need to add a changeset function which would perform validations
  for the data that would be stored.
  ```
    def changeset(%NewRule{}, params) do
      # logic for validations
    end
  ```
- Adopting the PromotionRule behaviour requires you to implement the following
  functions:
  - `rule_name`: Should return the rule name in the string form.
    ```
      def rule_name do
        @rule_name
      end
    ```
  - `eligible`: Takes as input order and the `rule_data`. The `rule_data` field
    contains the fields you specified in the map with string keys.
    ```
      %{"field_1" => data, "field_2" => data}
    ```
    ```
      def eligible(order, rule_data) do
        # logic to check for eligibility
      end
    ```
  - `line_item_actionable?`: This function is **optional** and should be
    implemented if it has some logic related to line items. e.g.
    See [`Snitch.Data.Schema.PromotionRule.Product`][6]
    ```
      def line_item_actionable? do
      # Add logic here.
      end
    ```

The completed module would look something like this
```elixir
  defmodule Snitch.Data.Schema.PromotionRule.NewRule do
    use Snitch.Data.Schema.PromotionRule

    embedded_schema
      field(:field_1)
      field(:field_2)
    end

    def changeset(%NewRule{}, params) do
      # logic for validations
    end

    def rule_name do
      @rule_name
    end

    def eligible(order, rule_data) do
      # logic to check for eligibility
    end

    def line_item_actionable? do
      # Add logic here.
    end
  end
```

Once this is done you need to add the register the module so that it is available
on the list of rules. This is done by adding the module to `PromotionRuleEnum` in
`promotion_enum.ex`.
e.g.
```elixir
defenum(PromotionRuleEnum,
  "Elixir.Snitch.Data.Schema.PromotionRule.OrderTotal": 0,
  "Elixir.Snitch.Data.Schema.PromotionRule.Product": 1,
  "Elixir.Snitch.Data.Schema.PromotionRule.NewRule": 2,
)
```

The next step is to add a template for the UI. In the `admin_app` in
apps/admin_app/lib/admin_app/promotion/rule_context.ex, add a new function
which pattern matches on the module name you added for the rule.
The function should return a map as shown below.

```elixir
  def rule_preferences(Snitch.Data.Schema.PromotionRule.NewRule, params) do
    %{name: module_name, rule_data: [%{key: field_1, value: field_1.value,
      type: "input"}, %{key: field_2, value: field2.value, type: "input"}]}
  end
```

The map returned contains the name of the module implementing the rule. Each
data field described in the schema for this rule is returned as a map
```
  %{key: field_2, value: field2.value, type: "input",
    source: "API endpoint or list of items"}
```
where key refers to the field name, value and type refers to the way this would
be shown in the frontend.

The `type` key depends on the type of the field. The type can be:
  - "input"
  - "select"
  - "multi-select"
  - "radio"
In case of a type such as "select", "multi-select" additional data can be sent
under the source field, it can be API which can be used to fetch the data or it
can be a list which itself can be used to set data for the field.

## Register New Action

New promotion actions can be added to Aviacommerce by following the below
mentioned steps.

- All the promotion actions need to adopt the `Snitch.Data.Schema.PromotionAction`
  behaviour by using the syntax.
  ```
  @behaviour Snitch.Data.Schema.PromotionAction
  ```
- You need to define an `embedded schema` to store the data that would be
  required by the action
  ```
    embedded_schema
      field(:field_1)
      field(:field_2)
    end
  ```
- You also need to add a changeset function which would perform validations
  for the data that would be stored.
  ```
    def changeset(%NewAction{}, params) do
      # logic for validations
    end
  ```
- Adopting the PromotionRule behaviour requires you to implement following
  functions:
  - `action_name`: Should return the action name in the string form.
    ```
      def action_name do
        @action_name
      end
    ```
  - `perform?`: The function takes as input the order and the
    action_data. The `action_data` field contains the fields you specified in
    map with string keys.
    ```
      %{"field_1" => data, "field_2" => data}
    ```
    It returns a boolean to show whether the action was performed or not.
    ```
      def perform?(order, action_data) do
        # logic to perform the action and create adjustments.
      end
    ```

The completed module would look something like this
```elixir
  defmodule Snitch.Data.Schema.PromotionRule.NewAction do
    @behaviour Snitch.Data.Schema.PromotionAction

    embedded_schema
      field(:field_1)
      field(:field_2)
    end

    def changeset(%NewRule{}, params) do
      # logic for validations
    end

    def action_name do
      @rule_name
    end

    def perform?(order, action_data) do
      # logic to perform the action and create adjustments.
    end
  end
```

Once this is done you need to add the register the module so that it is available
on the list of rules. This is done by adding the module to `PromotionRuleEnum` in
`promotion_enum.ex`.
e.g.
```elixir
defenum(PromotionActionEnum,
  "Elixir.Snitch.Data.Schema.PromotionAction.OrderAction": 0,
  "Elixir.Snitch.Data.Schema.PromotionAction.LineItemAction": 1,
  "Elixir.Snitch.Data.Schema.PromotionAction.NewAction": 2,
)
```

The next step is to add a template for the UI. In the `admin_app` in
apps/admin_app/lib/admin_app/promotion/action_context.ex, add a new function
which pattern matches on the module name you added for the action.
The function should return a map as shown below.

```elixir
  def action_preferences(Snitch.Data.Schema.PromotionRule.NewAction, params) do
    %{name: module_name, action_data: [%{key: field_1, value: field_1.value,
      type: "input"}, %{key: field_2, value: field2.value, type: "input"}]}
  end
```

The map returned contains the name of the module implementing the action. Each
data field described in the schema for this action is returned as a map.
```
  %{key: field_2, value: field2.value, type: "input",
    source: "api_endpoint or list of items"}
```
See [Register new Rule][reg_new_rule] for more info about the fields of the map.


[checks]: /docs/promotions.html#eligibility-checks
[actions]: /docs/promotions.html#actions
[promo-adj]: /docs/promotions.html#promotion-adjustments
[rules]: /docs/promotions.html#rules
[reg_new_rule]: /docs/promotions.html#register-new-rule
[reg_new_action]: /docs/promotions.html#register-new-action
[adjustments]: /docs/adjustments.html

[1]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/promotion/promotion.ex
[2]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion.ex
[3]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/promotion/promotion_applicability.ex
[4]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/model/promotion/order_eligibility.ex
[5]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion_rule/order_total.ex
[6]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion_rule/product.ex
[7]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion_rule/promotion_rule.ex
[8]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion_action/order.ex
[9]: https://github.com/aviacommerce/avia/blob/develop/apps/snitch_core/lib/core/data/schema/promotion/promotion_action/line_item.ex
