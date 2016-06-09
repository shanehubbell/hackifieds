import React from 'react';

const TableViewItem = (props) => (
  <div className="tableViewItem">
    <h1>{props.listing.address}</h1>
    <li key={props.listing.listingId} onClick={props.onClick}>
        Email: {props.listing.ownerEmail}
    </li>
  </div>
);

export default TableViewItem;
