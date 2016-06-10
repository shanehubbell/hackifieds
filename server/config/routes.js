const path = require('path');

const passport = require('passport');

const imagesController = require('../images/imagesController.js');
const listingsController = require('../controllers/listingsController.js');

const multer = require('multer');
const upload = multer({ dest: 'dist/images/' });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log('access denied');
  return res.redirect('/');
}

function onSuccess(req, res, next) {
  if (req.session.isLoggedIn) {
    res.json(true);
  } else {
    res.redirect('/');
  }
}

module.exports = (app) => {
  app.get('/auth/github',
  passport.authenticate('github', { scope: ['repo'] }));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      req.session.isLoggedIn = true;
      req.session.save();
      console.log('success');
      res.redirect('/');
    });

  app.post('/api/images', ensureAuthenticated, upload.single('file'), imagesController.addImage);

  app.post('/api/listings', ensureAuthenticated, listingsController.addListing);
  app.get('/api/listings', ensureAuthenticated, listingsController.getListings);

  app.get('/checklogin', ensureAuthenticated, onSuccess);

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
  });

  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

  // Catch all, work
  app.get('/*', ensureAuthenticated, listingsController.getListings);
};
