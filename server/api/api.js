const express = require('express');
const router = express.Router();
const config = require('../../config');
const Sequelize = require('sequelize');
const seed = require('./database')

// Database configuration
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// Database connection check
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Import Contact model
const Contact = sequelize.import(__dirname + "/models/contact.js");

// Creates table defined in Contact model if the table doesnt exist
// Contact.sync();

// Seeds database with test data
// seed.seedData();

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
