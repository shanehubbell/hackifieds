const bodyParser = require('body-parser');
const path = require('path');

<<<<<<< e56f428dc453dd8c642fe0cf2a5e7ea5ea239caf
=======
// Webpack hotloading -- this will recompile the code
// that you changed on the front-end on every save
var webpackConfig = require('../../webpack.config.js');
var compiler = require('webpack')(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = function(app, express, session, passport) {
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
  app.use(webpackDevMiddleware(compiler));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  app.use(bodyParser.json());
  app.use(morgan('dev'));

  // serve static files / libraries to the client
  app.use (express.static('./client/public'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/react-bootstrap/dist/'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/bootstrap/dist/'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/jquery/dist/'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/react/dist/'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/react-dom/dist/'));
  app.use ('/scripts', express.static(__dirname + '/../../node_modules/underscore/'));
  app.use ('/uploads', express.static(__dirname + '/../../uploads/'));

  app.use(session({
    secret: 'hackyhackifiers',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
>>>>>>> Get Redux, react, react-router set up

module.exports = (app, express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(`${__dirname}./../../dist`)));
};
