import React from 'react';
import TableViewItem from './TableViewItem.jsx';

const TableView = (props) => (
  <div className="tableView">
    <h1>TableView</h1>
    <ul>
      {console.log('filteredListings insdie table view', props)}
      {Object.keys(props.filteredListings).map((listingId) =>
        (<TableViewItem key={listingId} listing={props.filteredListings[listingId]} />)
      )}
    </ul>
  </div>
);

export default TableView;
