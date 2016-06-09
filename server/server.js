const app = require('./app.js').app;

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('listening on port: ', server.address().port);
});
