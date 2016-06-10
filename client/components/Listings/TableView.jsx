import React from 'react';
import TableViewItem from './TableViewItem.jsx';

const TableView = (props) => (
  <div className="tableView">
    <h1>TableView</h1>
    <ul>
      {Object.keys(props.filteredListings).map((listingId) => (
        <div>
          <TableViewItem key={listingId} listing={props.filteredListings[listingId]} />
          <br />
        </div>
        )
      )}
    </ul>
  </div>
);

export default TableView;
