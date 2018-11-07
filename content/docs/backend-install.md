---
id: backend-install
title: Backend Installation
permalink: docs/backend-install.html
next: deployment.html
---

Step-by-step guide to setup Avia Commerce locally for development and contribution.

## Pre-requisites

### Elixir
- Avia Commerce runs on Elixir 1.7+
  - [Install Elixir][1]
  - Check `elixir -v` to make sure it is 1.7 or higher.  
  - For version management we love [`asdf`][2] a lot.

### Hex 
- Installing Hex Package Manager
  - `mix local.hex`
  - To check the version `mix hex.info`

### Postgres
- At present Avia Commerce has been fully tested and exploited only on Postgres so
  make sure to have **postgres 9.5** or higher.
  - [Installation][3]
  - To check run `psql` and see the version in the prompt.

### Node
  - Installing [NodeJs][5]
  - The phoenix application in Avia Commerce uses [brunch.io][4] for asset management.
    Brunch uses _npm_ to install dependencies and npm requires node.js
  - Though phoenix suggests version node 5.0.0 or higher but to avoid any unwanted
    issues we would suggest **v 9.11.0** or higher.

### Extras
  - [wkhtmltopdf][9] is a command line tool to render HTML into PDF. Used in generating 
  pdf invoices. Download [here][10].

## Repo
You can find all the repositories related to Avia Commerce [here][6]. 

We need to clone the `avia` repository on our local.  
```
> git clone git@github.com:aviacommerce/avia.git
```

## Setting up the Development Environment

### Setting up the system environment variables
  - Create a copy of the `env/example.env`
    ```
    > cp env/example.env env/local.env
    ```
  The env file has keys, secrets and paths required by application to run. After
  putting all the details for different keys, source it.
    ```
    > source local.env
    ```
  
  #### Image Upload Setup
  The default configuration to store uploaded images on development environment is
  local storage.

  #### Setting up for image upload on S3 \\TODO

### Configuring Postgres
  To setup the database we have to modify `/apps/snitch_core/config/dev.exs`.  
  The default setup for `dev` is.  
  ```
    config :snitch_core, Snitch.Repo,
      adapter: Ecto.Adapters.Postgres,
      username: "postgres",
      password: "postgres",
      database: "snitch_dev",
      hostname: "localhost",
      pool_size: 10
  ```
 
  Replace the `username` and the `password` field with your local credentials for
  postgres. You can also change the `database` field to a name of your choice.

### Application Dependencies
From the root of the project run
```
> mix deps.get
```
This will install all the dependencies for the project.

### Setting Application Database
If you have already configured the database you can go ahead with steps mentioned
below, otherwise follow [Configuring Postgres][7].

- Move in to the snitch core directory
  ```
  > cd apps/snitch_core
  ```
- From the root of `snitch_core`
  - Create Database
    ```
    > mix ecto.create
    ```
  - Migrate the Database
    ```
    > mix ecto.migrate
    ```
  - Seed Database
    ```
    > mix run priv/repo/seed/seeds.exs
    ```

  ### Setting up Assets
  The admin application in Avia Commerce is phoenix application with html.  
  To setup the assets:
  ```
    > cd apps/addmin_app/assets
    > npm install
  ```

  ### Running the server

  From the project root
  ```
  > iex -S mix phx.server
  ```

  This will run two servers one for the `admin application` and the `api application`
  server.  

  Browser Admin Interface
  - http://localhost:4000

  To run the `user interface` you will have to go through the [frontend installation][8].
  
  in case you get `elm-make` command not found error on OS X from the project root:
  ```
  yarn global add elm@0.18.0 && elm-package install -y
  ```
   and then type this:
  ```
  cd apps/admin_app/assets && yarn install && cd elm && elm-package install --yes
  ```

  this will install old version of elm compatibile with the project


  ### Running Tests
  To run all the tests from your project root run the command
  ```
  > mix test
  ```

  You can also run the tests of individual applications from the root of those
  applications. e.g. to run tests of core
  ```
  > cd apps/snitch_core
  > mix test
  ```

[1]: https://elixir-lang.org/install.html
[2]: https://github.com/asdf-vm/asdf
[3]: https://wiki.postgresql.org/wiki/Detailed_installation_guides
[4]: https://brunch.io/
[5]: https://nodejs.org/en/download/package-manager/
[6]: https://github.com/aviacommerce
[7]: /docs/backend-install.html#configuring-postgres
[8]: /docs/frontend-install.html
[9]: https://wkhtmltopdf.org/
[10]: https://wkhtmltopdf.org/downloads.html
