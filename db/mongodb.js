const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pics');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const imagesSchema = mongoose.Schema({
    _id: String,
    data: Buffer,
    // img: { data: Buffer, contentType: String },
  });
  module.exports.Image = mongoose.model('Image', imagesSchema);
});
