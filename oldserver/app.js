var express = require('express');
var session = require('express-session');
var passport = require('passport');
var multer = require('multer');

// custom dependencies
var upload = multer({dest: 'uploads/'});

var app = express();

require('./config/middleware.js')(app, express, session, passport);
require('./config/passport')(passport);
require('./config/routes.js')(app, passport, upload);

// Start server, listen for client requests on designated port
console.log( 'hackifieds server listening on 3000....' );
app.listen(3000);

module.exports.app = app;

