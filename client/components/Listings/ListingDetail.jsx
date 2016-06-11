import React from 'react';

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
