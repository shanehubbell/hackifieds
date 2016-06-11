import React from 'react';
import FilterContainer from '../Filter/FilterContainer.jsx';
import SidebarContainer from '../Sidebar/SidebarContainer.jsx';
import Maps from '../Maps/Maps.jsx';

const Main = () => (
  <div className="listings">
    <FilterContainer />
    <div>
      <div className="mapsContainer">
        <Maps />
      </div>
      <div className="sideBarContainer">
        <SidebarContainer />
      </div>
    </div>
  </div>
);


export default Main;
