const bodyParser = require('body-parser');
const path = require('path');
const Strategy = require('passport-github2').Strategy;
const github = require('../auth/keys.js');

// auth
const passport = require('passport');
const session = require('express-session');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new Strategy({
  clientID: github.GITHUB_CLIENT_ID,
  clientSecret: github.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/github/callback',
},
(accessToken, refreshToken, profile, done) => {
  console.log(profile);
  // if fail done(null, false)
  process.nextTick(() => {
    done(null, profile);
  });
}));

// webpack / hmre
const config = require('../../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

module.exports = (app, express) => {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ secret: 'fred', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(`${__dirname}./../../dist`)));
};
