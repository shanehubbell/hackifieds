const cluster = require('cluster');

const children = {};
const Queue = require('./queueStack').Queue;
const pictureProcessQueue = new Queue();

const log = (p, msg) => {
  var name;
  var pid;
  if (p.name !== undefined) {
    name = p.name;
    pid = p.process.pid;
  } else {
    name = 'master';
    pid = process.pid;
  }
  console.log('[' + name + ' @ ' + pid + '] ' + msg);
};

const masterJob = () => {
  log('master', 'started master');

  const checkOnHTTPServer = () => {
    if (children.server === undefined) {
      log('master', 'starting an http server');
      children.server = cluster.fork({ ROLE: 'server' });
      children.server.name = 'http server';
      children.server.on('online', () => {
        log(children.server, 'ready for requests');
      });
      children.server.on('exit', () => {
        log(children.server, 'died');
        delete children.server;
      });
      children.server.on('message', (msg) => {
        log(children.server, 'got a message from the http server', JSON.stringify(msg));
        children.imageWorker.send(msg);
      });
    }
  };

  const checkOnImageWorker = () => {
    if (children.imageWorker === undefined) {
      log('master', 'starting image worker');
      children.imageWorker = cluster.fork({ ROLE: 'imageWorker' });
      children.imageWorker.name = 'image worker';

      children.imageWorker.on('online', () => {
        log(children.imageWorker, 'ready');
      });
      children.imageWorker.on('exit', () => {
        log(children.imageWorker, 'died');
        delete children.imageWorker;
      });

      children.imageWorker.on('message', (msg) => {
        log(children.imageWorker, JSON.stringify(msg));
      });
    }
  };

  const masterLoop = () => {
    checkOnHTTPServer();
    checkOnImageWorker();
  };

  setInterval(masterLoop, 1000);
};

if (cluster.isMaster) {
  masterJob();
} else {
  if (process.env.ROLE === 'imageWorker') {
    // imageWorkerJob();
  } else {
    // httpJob();
  }
}
