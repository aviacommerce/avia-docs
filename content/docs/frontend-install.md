---
id: frontend-install
title: Frontend Installation
permalink: docs/frontend-install.html
next: backend-install.html

---

Aviacommerce uses [AngularSpree](https://github.com/aviabird/angularspree) for front-end application.

Below are the instructions on how to install angularspree and get started with Aviacommerce.

- git clone `git@github.com:aviabird/angularspree.git`
- cd angularspree
- `yarn install` or `npm i`
- rename `config/custom.example` to `config/custom`

#### Running dev server
- `yarn start:dev-ng-spree` to start angularspree dev server on `localhost:4200`

#### Build directory structure
    |- dist
       |- browser (application build)
       |- server (angular universal server build)
       |- server.js (run `node dist/server.js` to start ssr server)

#### Production build
- command `yarn build:ssr:prod-ng-spree` will create a server side production build.
- command `node server.js` will start the ssr server.
- you can also use `yarn start:ssr:prod-ng-spree` to start ssr server directly.

### Themeing
----
- The app has multiple themes that can be enabled by uncommenting the theme import in `src/app/shared/scss/_selected_theme_variables.scss` and `src/app/shared/scss/_themes.scss`.
- Current deployed demo app has default theme. Where as master branch has custom theme. Try uncommenting the one you want and comment others.
- First is the `_selected_theme_variables.scss` file.
    - This file is used to provide theme variables that can be accessed in `*.component.css` files. This allows us to share theme colors across the application.
    - Example: Following code exposes css variables/functions for custom theme.
    ```css
        // Uncomment Active Variables
        // Used to import variables in components
        // @import "./custom_themes/default/theme_variables";
        
        @import "./custom_themes/custom/theme_variables";
        
        // @import "./custom_themes/custom2/theme_variables";
        // @import "./custom_themes/custom3/theme_variables";
        // @import "./custom_themes/custom4/theme_variables";
        // @import "./custom_themes/custom5/theme_variables";
    ```
- Second is the `_themes.scss`
    - This file is used to apply the desired theme to the application.
    - It's really simple to apply themes. *just uncomment the theme you want to use.*
    - Example: Following code enables custom theme.
    ```css
        // Uncomment Active themes
        // @import "./custom_themes/default/default";

        @import "./custom_themes/custom/custom"

        // @import './custom_themes/custom2/_custom2.scss'
        // @import './custom_themes/custom3/_custom3.scss'
        // @import './custom_themes/custom4/_custom4.scss';
        // @import './custom_themes/custom5/_custom5.scss'
    ```

> DO NOT IMPORT THE THEME INSIDE THE COMPONENTS TO USE VARIABLES. AS THAT WILL INCLUDE ENTIRE THEME INSIDE THAT COMPONENT. RESULTING IN BIGGER BUILDS.
