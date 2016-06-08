const Q = require('q');
const Listing = require('./listingsModel.js');

module.exports = {

  addListing: function addListing(req, res, next) {
    console.log(req.body);
  },

  getListings: function getListings(req, res, next) {

    const query = Listing.find({});
    Q(query.exec()).done((data) => res.end(`data: ${data}`));

    console.log(req.body);
  },

};
