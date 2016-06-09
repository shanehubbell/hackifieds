const db = require('../../db/db');

module.exports = {
  getListings: function getListings(req, res) {
    db.Listing.findAll({ where: {} })
    .then((listings) => {
      res.end(JSON.stringify(listings));
    })
    .catch((error) => {
      console.error(error);
      res.end('error');
    });
  },
  addListing: function addListing(req, res) {
    console.log(req.body);
    db.Listing.create({ userId: 'funfun' })
      .then((response) => {
        res.end(JSON.stringify(response.dataValues));
      })
      .catch((error) => {
        console.error(error);
        res.end('error');
      });
  },
};

