import React from 'react';
import TableViewItem from './TableViewItem.jsx';

const TableView = (props) => (
  <div className="tableView">
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

TableView.propTypes = {
  filteredListings: React.PropTypes.object,
};

export default TableView;
