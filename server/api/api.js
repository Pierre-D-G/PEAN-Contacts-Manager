const express = require('express');
const config = require('../../config');
const Sequelize = require('sequelize');
const seed = require('./database');

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

// Create contacts table if it doesnt exist
// Contact.sync();

// Inserting sample data in table
// seed.seedDb();

/* GET ALL CONTACTS. */
getContacts = (req, res) => {
  Contact.findAll().then(contacts => {
    res.status(200);
    return res.json(contacts)
  }).catch(err => {
    res.status(404);
    return res.json({ errors: ['Could not retrieve contacts'] })
  })
};

/* GET SINGLE CONTACT*/

GetContact = (req, res) => {
  Contact.findOne({
    where: {
      id: req.params.id
    }
  }).then(contact => {
    res.status(200);
    return res.json(contact)
  }).catch(err => {
    res.status(404);
    return res.json({ errors: ['Could not retrieve contact from the database'] })
  })
};

// Add new Contact

addContact = (req, res) => {
  Contact.create({
    avatar_url: req.body.avatar_url,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    company: req.body.company,
    home_phone: req.body.home_phone,
    mobile_phone: req.body.mobile_phone,
    work_phone: req.body.work_phone,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  }).then(function () {
    res.status(200);
    return res.json({ "success": "Contact Created" })
  }).catch(err => {
    res.status(400);
    return res.json({ "error": "Bad Request" })
  })
};

// Update a Contact's Details
updateContact = (req, res) => {
  Contact.update({
    avatar_url: req.body.avatar_url,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    company: req.body.company,
    home_phone: req.body.home_phone,
    mobile_phone: req.body.mobile_phone,
    work_phone: req.body.work_phone,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  },
    {
      where: {
        id: req.params.id
      },
      returning: true,
      raw: true,
      plain: true
    }
  ).then((contact) => {
    let updatedContact = contact[1];
    res.status(200);
    return res.json({ "success": "Updated contact's details", updatedContact })
  }).catch(err => {
    console.log(err);
    res.status(400);
    return res.json({ "error": "Bad Request" })
  })
};

deleteContact = (req,res) =>{
  Contact.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.status(200);
    return res.json({ "success": "Deleted contact's details" })
  }).catch(err => {
    res.status(404);
    return res.json({ "error": "Contact not found" })
  })
}

module.exports = { getContacts, GetContact, addContact, updateContact, deleteContact};
