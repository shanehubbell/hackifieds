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
    db.Listing.create({ userId: '123', address: 'greenhaven', lat: '45',
      lng: '44', distanceToHackReactor: '66', price: '$22.22',
      bathrooms: '2', private: false, ownerEmail: 'james@gmail.com',
      ownerName: 'James Marker', pictures: JSON.stringify(['ppp.jpg', 'img.png']),
      description: 'funfun' })
      .then((response) => {
        res.end(JSON.stringify(response.dataValues));
      })
      .catch((error) => {
        console.error(error);
        res.end('error');
      });
  },
};

