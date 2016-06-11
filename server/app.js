const express = require('express');

const app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

module.exports.app = app;
