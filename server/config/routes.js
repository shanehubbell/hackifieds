const path = require('path');

const imagesController = require('../images/imagesController.js');
const listingsController = require('../listings/listingsController.js');

const multer = require('multer');
const upload = multer({ dest: 'dist/images/' });

module.exports = (app) => {
  app.post('/api/images', upload.single('file'), imagesController.addImage);

  app.post('/api/listings', listingsController.addListing);
  app.get('/api/listings', listingsController.getListings);

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
  });
};
