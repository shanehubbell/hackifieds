import React from 'react';

const TableViewItem = (props) => (
  <div className="pure-g tableViewItem" key={props.listing.listingId} onClick={props.onClick}>
    <div className="pure-g">
      <img className="table-image pure-u-1-3" src={`images/${props.listing.pictures[0]}`} />
    </div>
    <div className="pure-g">
      <div className="icons pure-u-1-3">
        <p><span className="fa fa-usd" aria-hidden="true" />{" "}{props.listing.price}</p>
        <p><span className="fa fa-compass" aria-hidden="true" />{" "}5 miles to HR</p>
        <p><span className="fa fa-map-marker" aria-hidden="true" />{" "}{props.listing.address}</p>
        <p><span className={props.listing.private ? "fa fa-user" : "fa fa-users"} aria-hidden="true" />{" "}{props.listing.private ? 'Private Room' : 'Shared Room'}</p>
        <p><span className="fa fa-bed" aria-hidden="true" />{" "}{props.listing.bathrooms + (props.listing.bathrooms  > 1 ? ' bathrooms' : ' bathroom')}</p>
      </div>
    </div>
  </div>
);

export default TableViewItem;
