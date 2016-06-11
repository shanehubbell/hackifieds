import React from 'react';
import SidebarEntry from './SidebarEntry.jsx';

const Sidebar = (props) => (
  <div className="tableView">
    <ul>
      {Object.keys(props.filteredListings).map((listingId) => (
        <div>
          <SidebarEntry key={listingId} listing={props.filteredListings[listingId]} />
          <br />
        </div>
        )
      )}
    </ul>
  </div>
);

Sidebar.propTypes = {
  filteredListings: React.PropTypes.object,
};

export default Sidebar;
