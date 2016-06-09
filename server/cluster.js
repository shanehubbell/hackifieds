const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    cluster.fork();
  });
} else {
  require('./server');
}
