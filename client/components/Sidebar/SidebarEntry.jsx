import React from 'react';
import { Link } from 'react-router';

const SidebarEntry = (props) => {
  const listing = props.listing; // All data associated with listing
  const numOfBathrooms = `${listing.bathrooms} bathroom${listing.bathrooms > 1 ? 's' : ''}`;
  const distance = listing.distanceToHackReactor.miles;
  const privateRoom = {
    fontIcon: `fa fa-user${listing.private ? '' : 's'}`,
    text: `${listing.private ? 'Private' : 'Shared'} Room`,
  };
  console.log(listing, '<=== Listing');
  return (
    <Link to={`/listing-detail/${listing.listingId}`}>
      <div className="pure-g tableViewItem" key={listing.listingId} onClick={props.onClick}>
        <div className="pure-g">
          <img
            className="table-image pure-u-1-3 pure-img"
            alt="" src={`images/${listing.pictures[0]}`}
          />
        </div>
        <div className="pure-g">
          <div className="icons pure-u-1-3">
            <p><span className="fa fa-usd" aria-hidden="true" />{" "}{listing.price}</p>
            <p><span className="fa fa-compass" aria-hidden="true" />{" "}{distance} to Hack Reactor</p>
            <p><span className="fa fa-map-marker" aria-hidden="true" />{" "}{listing.address}</p>
            <p><span
              className={privateRoom.fontIcon}
              aria-hidden="true"
            />{" "}{privateRoom.text}</p>
            <p><span className="fa fa-bed" aria-hidden="true" />{" "}{numOfBathrooms}</p>
          </div>
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
