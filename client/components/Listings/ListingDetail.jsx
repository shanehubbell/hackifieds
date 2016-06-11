import React from 'react';
import { Link } from 'react-router';

const sendEmail = (props) => (
  window.location = `mailto:` + $props.listing.ownerEmail
);

const ListingDetail = (props) => (
  <div>
    <div id="container "className="photobanner">
        {props.listing.pictures.map((image, index) => (
          index === 0 ? 
          <img
            src={'/images/'+image}
            key={index}
            alt
            className="first img-resize"
          /> : 
          <img
            src={'/images/'+image}
            key={index}
            alt
            className="img-resize"
          />
          ))
        }
        {props.listing.pictures.map((image, index) => (
          <img
            src={'/images/'+image}
            key={index}
            alt
            className="img-resize"
          />
          ))
        }
        <br/>
    </div>
      <h1>{props.listing.description}</h1>
      <h2>{props.listing.address}</h2>
      <p>Bathrooms: {props.listing.bathrooms}</p>
      <p>{props.listing.distanceFromHR} miles from Hack Reactor!</p>
      <p>Host: {props.listing.ownerName}</p>
      <Link to={`mailto:${props.listing.ownerEmail}`}>
        <button>Request to Book!
        </button>
      </Link>
  </div>
);

ListingDetail.propTypes = {
  listing: React.PropTypes.object,
};

export default ListingDetail;