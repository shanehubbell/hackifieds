import React from 'react';

const ListingDetail = (props) => (
  <div>
  {console.log('Props inside of ListingDetail ==>', props)}
    <p>Pictures</p>
    {props.listing.pictures.map((image, index) => (
      <img
        src={'/images/'+image}
        key={index}
        className="table-image pure-img photo-box u-1 u-med-1-2 u-lrg-1-3"
        alt
      />
      ))
    }
    <br/>
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

ListingDetail.propTypes = {
  listing: React.PropTypes.object,
};

export default ListingDetail;
