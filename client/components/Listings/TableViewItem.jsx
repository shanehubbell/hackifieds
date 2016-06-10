import React from 'react';
import { Link } from 'react-router';

const TableViewItem = (props) => {
  const listing = props.listing; // All data associated with listing
  const numOfBathrooms = `${listing.bathrooms} bathroom${listing.bathrooms > 1 ? 's' : ''}`;
  const privateRoom = {
    fontIcon: `fa fa-user${listing.private ? '' : 's'}`,
    text: `${listing.private ? 'Private' : 'Shared'} Room`,
  };

  return (
    <div className="pure-g tableViewItem" key={listing.listingId} onClick={props.onClick}>
      <div className="pure-g">
        <img className="table-image pure-u-1-3 pure-img" alt="" src={`images/${listing.pictures[0]}`} />
      </div>
      <div className="pure-g">
        <div className="icons pure-u-1-3">
          <p><span className="fa fa-usd" aria-hidden="true" />{" "}{listing.price}</p>
          <p><span className="fa fa-compass" aria-hidden="true" />{" "}5 miles to HR</p>
          <p><span className="fa fa-map-marker" aria-hidden="true" />{" "}{listing.address}</p>
          <p><span className={privateRoom.fontIcon} aria-hidden="true" />{" "}{privateRoom.text}</p>
          <p><span className="fa fa-bed" aria-hidden="true" />{" "}{numOfBathrooms}</p>
        </div>
      </div>
    </div>
  );
};

TableViewItem.propTypes = {
  listing: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default TableViewItem;
