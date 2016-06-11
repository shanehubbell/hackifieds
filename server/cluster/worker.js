const path = require('path');

// db controllers
const listingsController = require('../controllers/listingsController.js');
const imageController = require('../controllers/imageController.js');

const GoogleMapsAPI = require('googlemaps');
const distance = require('google-distance-matrix');

// compression modules
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

// auth keys
const keys = require('../auth/keys.js');

const updateListing = (listingId, lat, lng, distanceToHackReactor) => {
  listingsController.updateListing(listingId, lat, lng,
    JSON.stringify(distanceToHackReactor), (err) => {
      if (!err) {
        console.log('gmap done');
      }
    });
};

const processGmap = (listingId, address, done) => {
  // tasks before callback
  var tasks = 2;

  // get lat lng
  var lat;
  var lng;

  const publicConfig = {
    key: keys.GMAP_SECRET,
    secure: true,
  };
  const gmapAPI = new GoogleMapsAPI(publicConfig);

  // get distance to hr
  var distanceToHackReactor;
  distance.key = keys.GMAP_SECRET;
  distance.units('imperial');


  gmapAPI.geocode({ address }, (err, data) => {
    if (!err) {
      lat = data.results[0].geometry.location.lat;
      lng = data.results[0].geometry.location.lng;
      console.log('gmap processed: ', lat, lng);
      if (--tasks === 0) {
        updateListing(listingId, lat, lng, distanceToHackReactor);
        done();
      }
    } else {
      console.log(err);
    }
  });

  distance.matrix([address], ['8, 944 Market St, San Francisco, CA 94102'],
    (err, data) => {
      if (!err) {
        distanceToHackReactor = {
          miles: data.rows[0].elements[0].distance.text,
          time: data.rows[0].elements[0].duration.text,
        };
        console.log('distance processd: ', distanceToHackReactor);
        if (--tasks === 0) {
          updateListing(listingId, lat, lng, distanceToHackReactor);
          done();
        }
      } else {
        console.log(err);
      }
    });
};

const processImages = (pictures, done) => {
  console.log('pictures!!', pictures);
  for (var i = 0; i < pictures.length; i++) {
    var picId = pictures[i];
    console.log('path: ', path.join(__dirname + '../../dist/images/' + picId));
    imagemin([path.join(__dirname + '../../../dist/images/' + picId)], path.join(__dirname + '../../../dist/compressed'),
    { plugins: [imageminMozjpeg({ quality: 90 }),
    imageminPngquant({ quality: '65-80' })] })
    .then((files) => {
      console.log('files to be sent to mongo', files);
      imageController.addImage(picId, files[0].data, (err, res) => {
        if (err) {
          console.log(err);
        }
        console.log(res);
      });
      //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    })
    .catch((err) => {
      console.log(err);
    });
  }
  done();
};

module.exports = {
  workerJob: () => {
    const processStack = [];

    // listen for new listings that need to be processed
    process.on('message', (listing) => {
      console.log('im enqueueing ', listing);
      processStack.push(listing);
    });

    const processListing = (listingId, callback) => {
      var tasksLeft = 2;
      listingsController.getListing(listingId, (err, listing) => {
        if (!err) {
          processGmap(listingId, listing.address, () => {
            if (--tasksLeft === 0) {
              console.log('finshed processing both gmaps and images for: ', listing.listingId);
              callback(null);
            }
          });
          processImages(JSON.parse(listing.pictures), () => {
            if (--tasksLeft === 0) {
              console.log('finshed processing both gmaps and images for: ', listing.listingId);
              callback(null);
            }
          });
        } else {
          callback(err);
        }
      });
    };


    const workerLoop = () => {
      if (processStack.length === 0) {
        setTimeout(workerLoop, 1000);
      } else {
        const listing = processStack.pop();
        process.send({ msg: 'processing listing', listing });

        processListing(listing, (err) => {
          if (!err) {
            process.send({ msg: 'success listing processed' });
          } else {
            processStack.push(listing);
          }
          // keep processing listings
          setTimeout(workerLoop, 1000);
        });
      }
    };

    workerLoop();
  },
};
