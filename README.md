# PEAN Contacts Manager

PostgreSQL,Express,Angular and Node web application to manage your contacts featuring a REST API and full CRUD functionality.

## Project Details

### REST API built from the ground up

#### API End Points

* Get - `/api/contacts` - view all your contacts and a few details about them
* Get - `/api/contacts/:id` - view all the details about a contact 
* Post - `/api/contacts` - Create a new contact
* Put - `/api/contacts/:id` - Update a contact's details
* Delete - `/api/contacts/:id` - Delete a contact

### Contact Details

name,
email,
home, work and mobile phone,
street address,
city,
state,
zip code

## Getting Started

Download or clone the repository

Run `npm install` to install dependancies

Requires postgreSQL installed on your machine.Get it here `https://www.postgresql.org/` and pgadmin if you like `https://www.pgadmin.org/`

## Development server

Run `ng serve` for a angular dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In another terminal

Run `npm run dev` for the express dev server. Navigate to `http://localhost:3000/api/contacts`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## TODO

### Backend

* Routes
  - Get - ~~`/api/contacts` - view all your contacts and a few details about them~~
  - Get - ~~`/api/contacts/:id` - view all the details about a contact~~ 
  - Post - ~~`/api/contacts` - Create a new contact~~
  - Put - `/api/contacts/:id` - Update a contact's details
  - Delete - `/api/contacts/:id` - Delete a contact

### Front-End

* Components 
 - ~~Contacts Component - View all contacts~~
 - ~~Contact Component - View a contacts details
 - Form Component
    * ~~Add Contact Component - Form to add a new contact~~
    * Edit Contact Component - Form to edit a contact's details

* Http Service
 - Service to connect to API
  * API Call Get - ~~`/api/contacts` - view all your contacts and a few details about them~~
  * API Call Get - ~~`/api/contacts/:id` - view all the details about a contact~~
  * API Call Post - ~~`/api/contacts` - Create a new contact~~
  * API Call Put - `/api/contacts/:id` - Update a contact's details
  * API Call Delete - `/api/contacts/:id` - Delete a contact

