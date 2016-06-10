const db = require('../../db/db');

module.exports = {
  getListings: function getListings(req, res) {
    // req.user.id
    db.Listing.findAll({ where: {} })
    .then((listings) => {
      const response = listings.reduce((accu, curr, index) => {
        const obj = accu;
        obj[index + 1] = curr;
        return accu;
      }, {});
      res.end(JSON.stringify(response));
    })
    .catch((error) => {
      console.error(error);
      res.end('error');
    });
  },
  addListing: function addListing(req, res) {
    console.log(req.body);
    db.Listing.create({ userId: req.user.id, address: req.body.address, price: req.body.price,
      bathrooms: req.body.bathrooms, private: JSON.parse(req.body.private),
      ownerEmail: req.body.ownerEmail, ownerName: req.body.ownerName,
      description: req.body.description, pictures: req.body.pictures })
      .then((response) => {
        res.end(JSON.stringify(response.dataValues));
      })
      .catch((error) => {
        console.error(error);
        res.end('error');
      });
  },
  getListing: function getListing(listingId, callback) {
    db.Listing.findOne({ where: { listingId } })
      .then((listing) => {
        callback(null, listing.dataValues);
      })
      .catch((error) => {
        callback(error);
      });
  },
};


