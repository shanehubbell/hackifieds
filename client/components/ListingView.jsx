import React from 'react';
import ImageView from './imageView.jsx';
import { connect } from 'react-redux';

// const id = this.props.params.id;

const test = {
  listings: {
    1: {
      images: ['http://www.3dmodelfree.com/imguploads/Image/0905/models_z/0625%20%203D/15.jpg',
      'http://tny.im/4E8',
      'http://www.crazy3dfree.com/uploads/091209/1_223952_1.jpg'],
      description: 'Old, shitty',
      address: '45 Broad Street',
      distanceFromHR: '1 mile',
      crimeRate: '5',
      owner: 'Marcus',
      ownerEmail: 'marcus@hackreactor.com',
    },
  },
};

const cssTag = `pure-u-1 pure-u-md-1-${test.listings[1].images.length} pure-img`;

const ListingsView = (props) => (
  <div>
    <div className="pure-g">
      {test.listings[1].images.map((link) => (
        <div className={cssTag}>
          <ImageView image={link} />
        </div>)
      )}
    </div>
    <h1>{test.listings[1].description}</h1>
    <h2>Address: {test.listings[1].address}</h2>
    <p>Bathrooms: {test.listings[1].address}</p>
    <p>Distance from HR: {test.listings[1].distanceFromHR}</p>
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Crime Rate: {test.listings[1].crimeRate}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Owner: {test.listings[1].ownerName}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-3">
        <p>Owner Email: {test.listings[1].ownerEmail}</p>
      </div>
    </div>
  </div>
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(ListingsView);
