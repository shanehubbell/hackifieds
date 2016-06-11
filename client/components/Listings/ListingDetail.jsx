import React from 'react';
import { Link } from 'react-router';

const sendEmail = (props) => (
  window.location = `mailto:` + $props.listing.ownerEmail
);

const ListingDetail = (props) => (
  <div>
    <div className="pure-g">
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
    </div>
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-2">
        <h1>Description: {props.listing.description}</h1>
      </div>
      <div className="pure-u-1 pure-u-md-1-2">
        <h2>Address: {props.listing.address}</h2>
      </div>
      <div className="pure-u-1 pure-u-md-1-2">
        <p>Bathrooms: {props.listing.address}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-2">
        <p>Distance from HR: {props.listing.distanceFromHR}</p>
      </div>
    </div>
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-2">
        <p>Owner: {props.listing.ownerName}</p>
      </div>
      <div className="pure-u-1 pure-u-md-1-2">
        <Link 
          title={`Inquiry for  ${props.listing.address}`} 
          href={`mailto:${props.listing.ownerEmail}?
          subject=Renting%20Inquiry%20${props.listing.address}&amp;body=I'm%20interested%20in%20renting!`}
        >
          <button>Request to Book!
          </button>
        </Link>
      </div>
    </div>
  </div>
);

ListingDetail.propTypes = {
  listing: React.PropTypes.object,
};

export default ListingDetail;

// href="mailto:?subject=Interesting%20information&amp;body=I thought you might find this 
// information interesting:%20%0d%0ahttp://www.a.com/Home/SiteMap/tabid/589/Default.aspx">

// ASD
//         <Link to={`mailto:${props.listing.ownerEmail}`}>
//         </Link>
// ASD