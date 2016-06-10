import React from 'react';
<<<<<<< 18a85ad614efbe62ab7551ce0471f3d987251a58
// import ImageGallery from './src/ImageGallery.jsx';

const ListingsView = (props) => (
  <div>
    <p>Pictures</p>
    {props.listing.pictures.map((image, index) => (
      <img
        src={'/images/'+image}
        key={index}
        className="photo-box u-1 u-med-1-2 u-lrg-1-3"
        alt
      />
      ))
    }
    <h1>Description: {props.listing.description}</h1>
    <h2>Address: {props.listing.address}</h2>
    <p>Bathrooms: {props.listing.address}</p>
    <p>Distance from HR: {props.listing.distanceFromHR}</p>
=======
import ImageView from './ImageView.jsx';
import { connect } from 'react-redux';

// const test = {
//   listings: {
//     1: {
//       images: ['http://www.3dmodelfree.com/imguploads/Image/0905/models_z/0625%20%203D/15.jpg',
//       'http://tny.im/4E8',
//       'http://www.crazy3dfree.com/uploads/091209/1_223952_1.jpg'],
//       description: 'Old, shitty',
//       address: '45 Broad Street',
//       distanceFromHR: '1 mile',
//       crimeRate: '5',
//       owner: 'Marcus',
//       ownerEmail: 'marcus@hackreactor.com',
//     },
//   },
// };

const cssTag = `pure-u-1 pure-u-md-1-${test.listings[1].images.length} pure-img`;

const ListingsView = (props) => (
  <div>
    <div className="pure-g">
      {test.listings[1].images.map((link) => (
        
          <ImageView image={link} />
        </div>)
      )}
    </div>
    <h1>{test.listings[1].description}</h1>
    <h2>Address: {test.listings[1].address}</h2>
    <p>Bathrooms: {test.listings[1].address}</p>
    <p>Distance from HR: {test.listings[1].distanceFromHR}</p>
>>>>>>> moving files into components folder
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Crime Rate: {props.listing.crimeRate}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Owner: {props.listing.ownerName}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Owner Email: {props.listing.ownerEmail}</p>
      </div>
    </div>
  </div>
);

ListingsView.propTypes = {
  listing: React.PropTypes.object,
};

export default ListingsView;