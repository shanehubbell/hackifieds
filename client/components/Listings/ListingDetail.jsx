import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const handleContact = (props) => (
  request
    .post('/email')
    .type('form')
    .send({ to: 'shane.hubbell@gmail.com' ,
      body: 'heeeeyyyy'})
    .end((err, res) => {
    })
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
      <p>Contact owner:</p>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <input 
            size="60"
            placeholder={`Inquiry about ${props.listing.address}`}
            value={props.message}
          />
        </div>
      </div>
        <p>
          <button
            onClick={handleContact}
            className="pure-button pure-button-primary">
            Submit
          </button>
        </p>
  </div>
);

ListingDetail.propTypes = {
  listing: React.PropTypes.object,
};

export default ListingDetail;
        // <Input type="text" name="body" value={`Inquiry about ${props.listing.address}`} />
