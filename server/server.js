const express = require('express');

// connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackPictures');

// webpack / hmre
const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8000, () => {
  console.log('listening *:8000');
});
