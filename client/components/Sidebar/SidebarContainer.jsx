import React from 'react';
import Sidebar from './Sidebar.jsx';
import { connect } from 'react-redux';

const SidebarContainer = (props) => (
  <Sidebar {...props} />
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    filteredListings: state.filteredListings,
  };
};

export default connect(mapStateToProps)(SidebarContainer);
