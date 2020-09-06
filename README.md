# ATM Demo App :atm:


## Installation

### Install Ruby with rvm

```
rvm install 2.6.3            # to install specified version of ruby
rvm use 2.6.3                # to switch to specified version of ruby
ruby -v                      # to check current ruby version
```

The last line should give something like `ruby 2.6.3p62 (2019-04-16 revision 67580) [i386-mingw32]`.

In case, you wish to set this version of ruby as your default version, use:
```
rvm --default use <ruby-version>
```

### Install Ruby on Rails

```
gem install rails _6.0.3_
```

### Install Bundler

Install bundler to manage application's gems:

```
gem install bundler
```

Then, use this bundler to install all gems specified in `Gemfile`:

```
bundle
```

## Prerequisites

You need to add following files at the root of the application

1. `database.yml` file to configure database connection. This file can be different for every developer because of different credentials for databased on their local machines. So, copy this file into a different file:
```
cp config/database.yml config/database.yml.example
```
Add `config/database.yml.example` to `.gitignore`.
A sample database configuration file containing configuration for different environments:
```
default: &default
  adapter: postgresql
  encoding: utf8
  pool: 5
  username: postgres
  password: password

development:
  <<: *default
  database: atm_demo_dev
  host: localhost

test:
  <<: *default
  database: atm_demo_test
  host: localhost

```

## Database creation:
Run following commands to create database required for this app.
```
rake db:create
rake db:migrate
```

## Database initialization:
Run following command to initialize database of this app.
```
rake db:seed
```


## Getting Started


In the project directory, you can run:

### `foreman start -f Procfile.dev`


This command runs the app in the development mode. :rocket: <br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />

Happy coding! :beer: