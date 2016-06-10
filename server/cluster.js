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

      // listen for messages from the http server
      children.server.on('message', (msg) => {
        log(children.server, 'got a message from the http server' + JSON.stringify(msg));
        // let the imageWorker know there is a new image he needs to proccess
        children.imageWorker.send(msg.img);
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

      // listen for messages from the image worker
      children.imageWorker.on('message', (msg) => {
        log(children.imageWorker, JSON.stringify(msg));
      });
    }
  };

  const masterLoop = () => {
    checkOnHTTPServer();
    checkOnImageWorker();
  };

  // keep checking to see if anyone of them are dead so we can remake them
  setInterval(masterLoop, 1000);
};

const httpJob = () => {
  require('./server.js');
};

const imageWorkerJob = () => {
  // listen for new image names that need to be processed from the http server
  process.on('message', (msg) => {
    pictureProcessQueue.enqueue(msg);
  });
  const processImage = (img, callback) => {
    console.log('processed', img);
    callback(null);
  };

  const imageWorkerLoop = () => {
    if (pictureProcessQueue.size() === 0) {
      setTimeout(imageWorkerLoop, 1000);
    } else {
      const image = pictureProcessQueue.dequeue();
      process.send({ msg: 'processing imgage' });
      processImage(image, (err) => {
        if (!err) {
          process.send({ msg: 'success procces it' });
        }

        // keep processing images
        setTimeout(imageWorkerLoop, 1000);
      });
    }
  };

  imageWorkerLoop();
};

if (cluster.isMaster) {
  masterJob();
} else {
  if (process.env.ROLE === 'imageWorker') {
    imageWorkerJob();
  } else {
    httpJob();
  }
}
