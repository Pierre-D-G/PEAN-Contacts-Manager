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
    pool.query("INSERT INTO contacts_manager(contact) VALUES ($1)", [{
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
        console.log('Query inserted')
      });
  }
}
