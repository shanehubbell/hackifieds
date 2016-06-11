const mongodb = require('../../db/mongodb');

module.exports = {
  postImage: function postImage(req, res) {
    res.end(req.file.filename);
  },
  addImage: function addImage(imgId, buffer, callback) {
    console.log('inside image controller', imgId);
    var image = new mongodb.Image({ _id: imgId, data: buffer });
    console.log(image);
    image.save((err, res) => {
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
