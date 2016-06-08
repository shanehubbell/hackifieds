const mongoose = require('mongoose');

const listingsSchema = mongoose.Schema({
  ownerEmail: String,
  price: String,
  address: String,
  pictures: String,
});

module.exports = mongoose.model('Listing', listingsSchema);
