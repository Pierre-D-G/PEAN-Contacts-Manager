# PEAN Contacts Manager
> PostgreSQL, Express, Angular 4, Node contacts manager

Web application to manage your contacts featuring a REST API and full CRUD functionality.

## Installing / Getting started

## Developing

### Built With
* Node v6.10.0
* Angular 4
* Express v4.15.3
* PostgreSQL v9.6
* Sequelize v4.2.1 as ORM

### Prerequisites

[Node](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/)

### Setting up Dev

```shell
git clone https://github.com/Pierre-D-G/PEAN-Contacts-Manager.git or download repository
cd Contacts Manager/
run `npm install` to install dependancies
```

## Development server

Run `ng serve` for a angular dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In another terminal

Run `npm run dev` for the express dev server. Navigate to `http://localhost:3000/api/contacts`

### Building

```shell
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
```
Compiles Tyepscript code into Javascript into a file named bundle.js.## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Tests

Run `npm test-unit` to execute unit tests via Mocha and Chai
> Tests the API endpoints to make sure the correct responses are being sent when requests are made


```shell
describe('Get all contacts', () => {
  it('it should GET all contacts', (done) => {
    chai.request(server)
      .get('/api/contacts')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
});
```

## Api Reference

* GET - `/api/contacts` - view all your contacts and a few details about them
* GET - `/api/contacts/:id` - view all the details about a contact 
* POST - `/api/contacts` - Create a new contact
* PUT - `/api/contacts/:id` - Update a contact's details
* DELETE - `/api/contacts/:id` - Delete a contact

## Database

[PostgreSQL v9.6](https://www.postgresql.org/) as database and Sequelize as the ORM

## Database design

### Table contacts

id: Integer, Primary ID that  auto increments

first_name: String, first name of contact

last_name: String, last name of contact

email: String, contact's email address

avatar_url: String, url to display profile image of contact

company: String, contact's place of employment

home_phone: String, contact's home phone number

mobile_phone: String, contact's mobile phone number

work_phone: String, contact's work phone number

street_address: String, contact's street address

city: String, contact's city of residence

state: String, contact's state of residence

zip_code: String, contact's zip_code

## Development Path

### Backend

* Routes
  - Get - ~~`/api/contacts` - view all your contacts and a few details about them~~
  - Get - ~~`/api/contacts/:id` - view all the details about a contact~~ 
  - Post - ~~`/api/contacts` - Create a new contact~~
  - Put - ~~`/api/contacts/:id` - Update a contact's details~~
  - Delete - ~~`/api/contacts/:id` - Delete a contact~~

### Front-End

* Components 
 - ~~Contacts Component - View all contacts~~
 - ~~Contact Component - View a contacts details~~
 - Form Component
    * ~~Add Contact Component - Form to add a new contact~~
    * ~~Edit Contact Component - Form to edit a contact's details~~

* Http Service
 - Service to connect to API
  * API Call Get - ~~`/api/contacts` - view all your contacts and a few details about them~~
  * API Call Get - ~~`/api/contacts/:id` - view all the details about a contact~~
  * API Call Post - ~~`/api/contacts` - Create a new contact~~
  * API Call Put - ~~`/api/contacts/:id` - Update a contact's details~~
  * API Call Delete - ~~`/api/contacts/:id` - Delete a contact~~

## Licensing

MIT
