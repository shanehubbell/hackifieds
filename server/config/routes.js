const path = require('path');

const passport = require('passport');

const imagesController = require('../images/imagesController.js');
const listingsController = require('../controllers/listingsController.js');

const multer = require('multer');
const upload = multer({ dest: 'dist/images/' });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log('User is not authenticated. Redirect to splash');
  return res.redirect('/');
}

function checkLoginHandler(req, res, next) {
  if (req.session.isLoggedIn) {
    // Send back this response so client and use it to update state
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
      console.log('User successfully authenticated with Github.');
      // On success, attach the logged in status to session for the duration
      // of the session. Will be used to set the state on the front end
      req.session.isLoggedIn = true;
      req.session.save();
      res.redirect('/');
    });

  app.post('/api/images', ensureAuthenticated, upload.single('file'), imagesController.addImage);

  app.post('/api/listings', ensureAuthenticated, listingsController.addListing);
  app.get('/api/listings', ensureAuthenticated, listingsController.getListings);

  app.get('/checklogin', ensureAuthenticated, checkLoginHandler);

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
  });

  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

  // Catch all;
  app.get('/*', (req, res) => {
    res.redirect('/');
  });
};
