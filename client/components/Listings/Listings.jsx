import React from 'react';
import FilterContainer from './FilterContainer.jsx';
import TableViewContainer from './TableViewContainer.jsx';

const Listings = (props) => (
  <div className="listings">
    <FilterContainer />
    <TableViewContainer />
  </div>
);

export default Listings;
