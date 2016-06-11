import React from 'react';
import { Link } from 'react-router';

const SidebarEntry = (props) => {
  const listing = props.listing; // All data associated with listing
  const numOfBathrooms = `${listing.bathrooms} bathroom${listing.bathrooms > 1 ? 's' : ''}`;
  const distance = listing.distanceToHackReactor.miles;
  const privateRoom = {
    text: `${listing.private ? 'Private' : 'Shared'} Room`,
  };

  return (
    <Link to={`/listing-detail/${listing.listingId}`}>
      <div className="tableViewItem" key={listing.listingId}>
        <div className="tableViewItemImage">
          <img
            alt="" src={`images/${listing.pictures[0]}`}
          />
        </div>
        <div className="tableViewItemDetails">
          <div>
            <i className="fa fa-usd" aria-hidden="true"></i>
            {listing.price}
            {' '}
            <i className="fa fa-bed" aria-hidden="true"></i>
            {' '}
            {privateRoom.text}
          </div>
          <div>
            Total bathrooms: {numOfBathrooms}
          </div>
          <div>
            {distance} to Hack Reactor
          </div>
          {listing.address}
        </div>
      </div>
    </Link>
  );
};

SidebarEntry.propTypes = {
  listing: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default SidebarEntry;
