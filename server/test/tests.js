let config = require('../../config');
let Sequelize = require('sequelize');
let db = require('../api/database');

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

let Contact = sequelize.import(__dirname + "/models/contact.js");

// Contact.sync();
// db.clearDatabase();

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server')
let should = chai.should();

chai.use(chaiHttp);

// Testing GET all contacts route
// GET /api/contacts
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


describe('Contacts Involving Queries to database', () => {
  beforeEach((done) => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      }).then(() => {
        console.log('Clearing Database');
        db.clearDatabase();
      }).then(() => {
        done();
      })

  });
  // Testing Post a new contact route
  // POST /api/contacts

  describe('Add a new contact', () => {
    it('it should POST the details of a new contact', (done) => {
      let contact = {
        "first_name": "Keith",
        "last_name": "Hibbs",
        "email": "keith.hibbs@gmail.com",
        "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
        "company": "Kelloggs LLC",
        "home_phone": "123-4567",
        "mobile_phone": "234-5678",
        "work_phone": "345-6789",
        "street_address": "743 Studebaker Street ",
        "city": "Rome",
        "state": "New York",
        "zip_code": "13440",
      }
      chai.request(server)
        .post('/api/contacts')
        .send(contact)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql('Contact Created');
          done();
        })
    })
  });

  // Testing Get a contact's details route
  // GET /api/contacts/:id

  describe('Get details of a contact', () => {
    it('it should get the details of a single contact by the given id', (done) => {
      let contact = {
        "first_name": "Keith",
        "last_name": "Hibbs",
        "email": "keith.hibbs@gmail.com",
        "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
        "company": "Kelloggs LLC",
        "home_phone": "123-4567",
        "mobile_phone": "234-5678",
        "work_phone": "345-6789",
        "street_address": "743 Studebaker Street ",
        "city": "Rome",
        "state": "New York",
        "zip_code": "13440",
      }

      Contact.create(contact).then(contact => {
        chai.request(server)
          .get('/api/contacts/' + contact.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('first_name');
            res.body.should.have.property('last_name');
            done();
          })
      })
    })
  });

  // Testing PUT route to update a contact
  // PUT /api/contacts/:id
  describe('Update details of a contact', () => {
    it('it should update the details of a single contact by the given id', (done) => {
      let contact = {
        "first_name": "Keith",
        "last_name": "Hibbs",
        "email": "keith.hibbs@gmail.com",
        "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
        "company": "Kelloggs LLC",
        "home_phone": "123-4567",
        "mobile_phone": "234-5678",
        "work_phone": "345-6789",
        "street_address": "743 Studebaker Street ",
        "city": "Rome",
        "state": "New York",
        "zip_code": "13440",
      }

      let updatedContact = {
        "first_name": "Keith",
        "last_name": "Hibbs",
        "email": "hibbs.keith@gmail.com",
        "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
        "company": "Kelloggs LLC",
        "home_phone": "123-4567",
        "mobile_phone": "234-5678",
        "work_phone": "345-6789",
        "street_address": "7th Avenue",
        "city": "Manhatten",
        "state": "New York",
        "zip_code": "13440",
      }

      Contact.create(contact).then(contact => {
        chai.request(server)
          .put('/api/contacts/' + contact.id)
          .send(updatedContact)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eql("Updated contact's details")
            res.body.updatedContact.should.have.property('email').eql('hibbs.keith@gmail.com');
            res.body.updatedContact.should.have.property('street_address').eql('7th Avenue');
            res.body.updatedContact.should.have.property('city').eql('Manhatten');
            done();
          })
      })
    })
  });

  // Testing DELETE route to dlete a contatc
  // DELETE /api/contacts/id

   describe('Delete a contact', () => {
    it('it should delete the details of a single contact given the id', (done) => {
      let contact = {
        "first_name": "TestName",
        "last_name": "TestLastNaem",
        "email": "test.email@gmail.com",
        "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
        "company": "Test LLC",
        "home_phone": "123-4567",
        "mobile_phone": "234-5678",
        "work_phone": "345-6789",
        "street_address": "743 Test Street ",
        "city": "Tester",
        "state": "Testing",
        "zip_code": "12345",
      }

      Contact.create(contact).then(contact => {
        chai.request(server)
          .delete('/api/contacts/' + contact.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eql("Deleted contact's details");
            done();
          })
      })
    })
  });

})
