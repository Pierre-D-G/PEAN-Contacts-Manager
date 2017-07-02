const express = require('express');
const router = express.Router();
const config = require('../../config');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'Guest', //env var: PGUSER
  database: 'contacts', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
});

newTable = () => {
  pg.connect(db, function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query("CREATE TABLE IF NOT EXISTS contacts_manager(id serial primary key, contact JSON)",
      function (err, success) {
        if (err) {
          return console.error('Error creating new table', err);
        }
        done(err);
        console.log('Created new table')
      });
  })
}

testData = () => {
  pg.connect(db, function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query("INSERT INTO contacts_manager(contact) VALUES ($1)", [{
      "name": "fred",
      "email": "test@gmail.com",
      "company": "TestCo",
      "phone_numbers": {
        "home_phone": "555-5555",
        "mobile_phone": "777-7777",
        "work_phone": "888-888"
      },
      "location": {
        "street_address": "52 The Elms",
        "city": "Los Angeles",
        "state": "California",
        "zip_code": "90210"
      }
    }]
    , function (err, success) {
      if (err) {
        return console.error('error excecuting insert query', err);
      }
      done(err);
      console.log('Query inserted')
    });

  });
}


// newTable();
// testData();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');

    pool.query('SELECT * FROM contacts_manager', function (err, result) {

      if (err) {
          console.log(err);
        res.statusCode = 500;
        return res.json({errors: ['Could not retrieve contacts']})
      }
      req.contacts = result.rows;
      console.log(req.contacts)
    });
  });

module.exports = router;
