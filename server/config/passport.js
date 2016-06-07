var GitHubStrategy = require('passport-github2').Strategy;
var github = require('../auth/github_oauth');
var db = require('../../db/db');

var githubOAuthHandler = function(accessToken, refreshToken, profile, done) {
  // TODO: include fields that are not nullable in DB
  db.User.findOrCreate({ where: { username: profile.username } })
    .spread(function(user, created) {
      console.log('Created: ', created);
      return done(null, user);
    });
};

module.exports = function(passport) {
  passport.use(new GitHubStrategy({
    clientID: github.GITHUB_CLIENT_ID,
    clientSecret: github.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, githubOAuthHandler));
};

