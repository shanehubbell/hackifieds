import React from 'react';

const TableViewItem = (props) => (
  <div className="pure-g tableViewItem" key={props.listing.listingId} onClick={props.onClick}>
    <div className="pure-u-1-3">
      <img className="table-image" src={`images/${props.listing.pictures[0]}`} />
      <div className="icons">
        <h5><span className="fa fa-usd" aria-hidden="true" />{" "}{props.listing.price}/month</h5>
        <h5><span className="fa fa-compass" aria-hidden="true" />{" "}miles to HR</h5>
        <h5><span className="fa fa-map-marker" aria-hidden="true" />{" "}{props.listing.address}</h5>
        <h5><span className="fa fa-bed" aria-hidden="true" />{" "}{props.listing.bathrooms  + (props.listing.bathrooms  > 1 ? ' bathrooms' : ' bathroom')}</h5>
      </div>
    </div>
  </div>
);

export default TableViewItem;
