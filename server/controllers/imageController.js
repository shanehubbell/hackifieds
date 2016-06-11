const mongodb = require('../../db/mongodb');

module.exports = {
  postImage: function postImage(req, res) {
    console.log('posted this image to the images folder', req.file.filename);
    res.end(req.file.filename);
  },
  addImage: function addImage(imgId, buffer, callback) {
    var image = new mongodb.Image({ _id: imgId, data: buffer });
    image.save((err, res) => {
      console.log('saved image to mongodb with id: ', imgId);
      callback(err, res);
    });
  },
  getImage: function getImage(req, res) {
    console.log('asking for image', req.params[0]);
    mongodb.Image.findById(req.params[0], (err, doc) => {
      if (err || doc === undefined || doc === null) {
        res.end(JSON.stringify(err));
      } else {
        res.end(doc.data);
      }
    });
  },
};
