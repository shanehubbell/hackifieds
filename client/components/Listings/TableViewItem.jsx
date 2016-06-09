import React from 'react';

const TableViewItem = (props) => (
  <div className="tableViewItem">
    <h1>Table View Item</h1>
    (<li key={props.listing.listingId} onClick={props.onClick}>
        Email: {props.listing.email}
    </li>)
  </div>
);

export default TableViewItem;
