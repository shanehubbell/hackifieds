const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  img: { data: Buffer, contentType: String },
});

module.exports = mongoose.model('Image', imagesSchema);
