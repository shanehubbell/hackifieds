import React from 'react';
import TableViewItem from './TableViewItem.jsx';

const TableView = (props) => (
  <div className="tableView">
    <h1>TableView</h1>
    <ul>
      {Object.keys(props.displayedListings).map((listingId) =>
        (<TableViewItem listing={props.displayedListings[listingId]} />)
      )}
    </ul>
  </div>
);

export default TableView;
