const express = require('express');

// connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackPictures');


const app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

module.exports.app = app;
