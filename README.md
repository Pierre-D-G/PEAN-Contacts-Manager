# PEAN Contacts Manager

PostgreSQL,Express,Angular and Node web application to manage your contacts featuring a REST API and full CRUD functionality.

## Project Details

### REST API built from the ground up

#### API End Points

* Get - `/api/contacts` - view all your contacts and a few details about them
* Get - `/api/contacts/contact/:id` - view all the details about a contact 
* Post - `/api/contacts` - Create a new contact
* Put - `/api/contacts/contact/:id` - Update a contact's details
* Delete - `/api/contacts/contact/:id` - Delete a contacts

### Contact Details

name
email
home, work and mobile phone
street address
city
state
country

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

