import React from 'react';
import ImageView from './imageView.jsx';
import { connect } from 'react-redux';

const ListingsView = (props) => (
  <div>
    <div className="pure-g">
      {Object.keys(this.props.listings[id].images).map((image) =>
        (<ImageView image={image} />)
      )}
    </div>
    <h1>Description: {this.props.listings[id].description}</h1>
    <h2>Address: {this.props.listings[id].address}</h2>
    <p>Bathrooms: {this.props.listings[id].address}</p>
    <p>Distance from HR: {this.props.listings[id].distanceFromHR}</p>
    <p>Crime Rate: {this.props.listings[id].crimeRate}</p>
    <p>Owner: {this.props.listings[id].ownerName}</p>
    <p>Owner Email: {this.props.listings[id].ownerEmail}</p>
  </div>
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(ListingsView);
