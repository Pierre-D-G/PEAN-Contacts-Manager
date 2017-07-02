const express = require('express');
const router = express.Router();
const config = require('../../config');
const db_table = require('./db_table/newTable');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'Guest', //env var: PGUSER
  database: 'contacts', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
});

// db_table.newTable();
// db_table.testData();

/* GET ALL CONTACTS. */
router.get('/', (req, res) => {
  pool.query('SELECT * FROM contacts_manager', function (err, result) {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      return res.json({ errors: ['Could not retrieve contacts'] })
    } else {
      contacts = result.rows;
      return res.json(contacts);
    }
  });
});

/* GET SINGLE CONTACT*/

router.get('/contact/:id', (req, res) => {
  pool.query('SELECT * FROM contacts_manager WHERE id=$1', [
    req.params.id
  ], function(err, result){
    if(err){
      console.log(err);
      res.statusCode = 404;
      return res.json({ errors: ['Could not find contact'] })
    } else {
      contact = result.rows;
      return res.json(contact)
    }
  })
})

module.exports = router;
