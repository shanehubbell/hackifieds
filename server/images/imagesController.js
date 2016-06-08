const Q = require('q');

module.exports = {
  addImage: function addListing(req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.end(req.file.filename);
  },
};
