const cluster = require('cluster');

const children = {};

// console.log helper
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

      // listen for messages from the http server
      children.server.on('message', (msg) => {
        log(children.server, 'got a message from the http server' + JSON.stringify(msg));

        // let the worker know there is a new listing or email he needs to process
        if (msg.listingId) {
          children.worker.send(msg.listingId);
        } else if (msg.email) {
          children.email.send(msg.email);
        } else {
          console.log('unrecognized message from http server');
        }
      });
    }
  };

  const checkOnWorker = () => {
    if (children.worker === undefined) {
      log('master', 'starting worker');
      children.worker = cluster.fork({ ROLE: 'worker' });
      children.worker.name = 'worker';

      children.worker.on('online', () => {
        log(children.worker, 'ready');
      });
      children.worker.on('exit', () => {
        log(children.worker, 'died');
        delete children.worker;
      });

      // listen for messages from the listing worker
      children.worker.on('message', (msg) => {
        log(children.worker, JSON.stringify(msg));
      });
    }
  };

  const checkOnEmail = () => {
    if (children.email === undefined) {
      log('master', 'starting email');
      children.email = cluster.fork({ ROLE: 'email' });
      children.email.name = 'email';

      children.email.on('online', () => {
        log(children.email, 'ready');
      });
      children.email.on('exit', () => {
        log(children.email, 'died');
        delete children.email;
      });

      // listen for messages from the email worker
      children.email.on('message', (msg) => {
        log(children.email, JSON.stringify(msg));
      });
    }
  };

  const masterLoop = () => {
    checkOnHTTPServer();
    checkOnWorker();
    checkOnEmail();
  };

  // keep checking to see if anyone of them are dead so we can remake them
  setInterval(masterLoop, 1000);
};

const httpJob = () => {
  require('../server.js');
};

if (cluster.isMaster) {
  masterJob();
} else {
  if (process.env.ROLE === 'worker') {
    const worker = require('./worker.js');
    worker.workerJob();
  } else if (process.env.ROLE === 'email') {
    
  } else {
    httpJob();
  }
}
