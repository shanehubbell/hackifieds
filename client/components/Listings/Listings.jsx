import React from 'react';
import FilterContainer from './FilterContainer.jsx';
import TableViewContainer from './TableViewContainer.jsx';

const Listings = (props) => (
  <div className="listings">
    <h1>Listings</h1>
    <FilterContainer />
    <TableViewContainer displayedListings={props.displayedListings} />
  </div>
);

export default Listings;
