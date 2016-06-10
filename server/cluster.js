const cluster = require('cluster');

const children = {};
const Queue = require('./queueStack').Queue;
const listingQueue = new Queue();

const listingsController = require('./controllers/listingsController.js');
const GoogleMapsAPI = require('googlemaps');
const distance = require('google-distance-matrix');

const keys = require('./auth/keys.js');


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
        // let the worker know there is a new listing he needs to proccess
        children.worker.send(msg.listingId);
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

  const masterLoop = () => {
    checkOnHTTPServer();
    checkOnWorker();
  };

  // keep checking to see if anyone of them are dead so we can remake them
  setInterval(masterLoop, 1000);
};

const httpJob = () => {
  require('./server.js');
};

const gmap = (listingId, address, done) => {
  address = 'greenhaven mukilteo, WA';
  distance.key = keys.GMAP_SECRET;
  distance.units('imperial');

  const publicConfig = {
    key: keys.GMAP_SECRET,
    secure: true,
  };

  const gmapAPI = new GoogleMapsAPI(publicConfig);

  gmapAPI.geocode({ address }, (err, data) => {
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    console.log('gmap', lat, lng);
  });

  distance.matrix([address], ['8, 944 Market St, San Francisco, CA 94102'],
    (err, data) => {
      const distanceToHackReactor = {
        miles: data.rows[0].elements[0].distance.text,
        time: data.rows[0].elements[0].duration.text,
      };
      console.log('distance: ', distanceToHackReactor);
    });

  listingsController.updateListing(listingId, 101, 102, 55, (err) => {
    if (!err) {
      console.log('gmap done');
    }
    done();
  });
};

const img = (pictures, done) => {
  console.log(pictures);
  done();
};

const workerJob = () => {
  // listen for new listings that need to be processed
  process.on('message', (listing) => {
    listingQueue.enqueue(listing);
  });

  const processListing = (listingId, callback) => {
    var tasksLeft = 2;
    listingsController.getListing(listingId, (err, listing) => {
      if (!err) {
        gmap(listingId, listing.address, () => {
          if (--tasksLeft === 0) {
            console.log('processed', listing.listingId);
            callback(null);
          }
        });
        img(JSON.parse(listing.pictures), () => {
          if (--tasksLeft === 0) {
            console.log('processed', listing.listingId);
            callback(null);
          }
        });
      } else {
        console.log(err);
      }
    });
  };

  const workerLoop = () => {
    if (listingQueue.size() === 0) {
      setTimeout(workerLoop, 1000);
    } else {
      const listing = listingQueue.dequeue();
      process.send({ msg: 'processing listing' });
      processListing(listing, (err) => {
        if (!err) {
          process.send({ msg: 'success listing processed' });
        } else {
          listingQueue.enqueue(listing);
        }
        // keep processing listings
        setTimeout(workerLoop, 1000);
      });
    }
  };

  workerLoop();
};

if (cluster.isMaster) {
  masterJob();
} else {
  if (process.env.ROLE === 'worker') {
    workerJob();
  } else {
    httpJob();
  }
}
