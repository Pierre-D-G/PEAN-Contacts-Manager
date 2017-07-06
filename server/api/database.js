const Sequelize = require('sequelize');
const config = require('../../config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
const Contact = sequelize.import(__dirname + "/models/contact.js");

module.exports = {

  seedData: function () {
    Contact.create({
      "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg",
      "first_name": "Patrick",
      "last_name": "Dessler",
      "email": "patrick.dess@gmail.com",
      "company": "Pat Brewery LLC",
      "home_phone": "546-9442",
      "mobile_phone": "446-8851",
      "work_phone": "906-2721",
      "street_address": "123 6th St.",
      "city": "Melbourne",
      "state": "Florida",
      "zip_code": "32904"
    }).then(function () {
      Contact.create({
        "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-58872992.jpg",
        "first_name": "Kurtis",
        "last_name": "Karner",
        "email": "k.karner@gmail.com",
        "company": "Karoil LLC",
        "home_phone": "546-4478",
        "mobile_phone": "906-2721",
        "work_phone": "569-4371",
        "street_address": "4 Goldfield Rd. ",
        "city": "Honolulu",
        "state": "Hawaii",
        "zip_code": "96815",
      }).then(function () {
        Contact.create({
          "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58225497.jpg",
          "first_name": "Jeanette",
          "last_name": "Funke",
          "email": "jeanette.funke@gmail.com",
          "company": "Funkosauros LLC",
          "home_phone": "925-1352",
          "mobile_phone": "128-6749",
          "work_phone": "261-3326",
          "street_address": "71 Pilgrim Avenue",
          "city": "Chevy Chase",
          "state": "Maryland",
          "zip_code": "20815"
        }).then(function () {
          Contact.create({
            "avatar_url": "http://www.st2299.com/data/wallpapers/64/wp-image-58446570.jpg",
            "first_name": "Hayden",
            "last_name": "Arends",
            "email": "hayden.arends@gmail.com",
            "company": "Hayden Arrests U LLC",
            "home_phone": "450-2175",
            "mobile_phone": "787-4701",
            "work_phone": "631-3425",
            "street_address": "44 Shirley Ave. ",
            "city": "West Chicago",
            "state": "Illinois",
            "zip_code": "60185"
          }).then(function () {
            Contact.create({
              "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58129842.jpg",
              "first_name": "Layla",
              "last_name": "Machado",
              "email": "layla.machado@gmail.com",
              "company": "Lay Mac N Cheese LLC",
              "home_phone": "838-7814",
              "mobile_phone": "225-1738",
              "work_phone": "775-4509",
              "street_address": "70 Bowman St.",
              "city": "South Windsor",
              "state": "Connecticut",
              "zip_code": "06074"
            })
          })
        })
      })
    })
  },
}
