const { Pool } = require('pg');

const pool = new Pool({
  user: 'Guest', //env var: PGUSER
  database: 'contacts', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
});

module.exports = {


  newTable: function () {
    pool.query("CREATE TABLE IF NOT EXISTS contacts_manager(id serial primary key, contact JSON)",
      function (err, success) {
        if (err) {
          return console.error('Error creating new table', err);
        }
        console.log('Created new table')
      });
  },
  testData: function () {
    pool.query("INSERT INTO contacts_manager(contact) VALUES ($1), ($2), ($3), ($4), ($5)", [{
      "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg",
      "name": "Patrick Dessler",
      "email": "patrick.dess@gmail.com",
      "company": "Pat Brewery LLC",
      "phone_numbers": {
        "home_phone": "546-9442",
        "mobile_phone": "446-8851",
        "work_phone": "906-2721"
      },
      "location": {
        "street_address": "123 6th St.",
        "city": "Melbourne",
        "state": "Florida",
        "zip_code": "32904"
      }
    },
    {
      "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-58872992.jpg",
      "name": "Kurtis Karner",
      "email": "k.karner@gmail.com",
      "company": "Karoil LLC",
      "phone_numbers": {
        "home_phone": "546-4478",
        "mobile_phone": "906-2721",
        "work_phone": "569-4371"
      },
      "location": {
        "street_address": "4 Goldfield Rd. ",
        "city": "Honolulu",
        "state": "Hawaii",
        "zip_code": "96815"
      }
    },
    {
      "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58225497.jpg",
      "name": "Jeanette Funke",
      "email": "jeanette.funke@gmail.com",
      "company": "Funkosauros LLC",
      "phone_numbers": {
        "home_phone": "925-1352",
        "mobile_phone": "128-6749",
        "work_phone": "261-3326"
      },
      "location": {
        "street_address": "71 Pilgrim Avenue",
        "city": "Chevy Chase",
        "state": "Maryland",
        "zip_code": "20815"
      }
    },
    {
      "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-58446570.jpg",
      "name": "Hayden Arends",
      "email": "hayden.arends@gmail.com",
      "company": "Hayden Arrests U LLC",
      "phone_numbers": {
        "home_phone": "450-2175",
        "mobile_phone": "787-4701",
        "work_phone": "631-3425"
      },
      "location": {
        "street_address": "44 Shirley Ave. ",
        "city": "West Chicago",
        "state": "Illinois",
        "zip_code": "60185"
      }
    },
    {
      "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58129842.jpg",
      "name": "Layla Machado",
      "email": "layla.machado@gmail.com",
      "company": "Lay Mac N Cheese LLC",
      "phone_numbers": {
        "home_phone": "838-7814",
        "mobile_phone": "225-1738",
        "work_phone": "775-4509"
      },
      "location": {
        "street_address": "70 Bowman St.",
        "city": "South Windsor",
        "state": "Connecticut",
        "zip_code": "06074"
      }
    }]
      , function (err, success) {
        if (err) {
          return console.error('error excecuting insert query', err);
        }
        console.log('Query inserted')
      });
  }
}
