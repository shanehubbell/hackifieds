import React from 'react';
import TableView from './TableView.jsx';
import { connect } from 'react-redux';

const TableViewContainer = (props) => (
  <TableView {...props} />
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    filteredListings: state.filteredListings,
  };
};

export default connect(mapStateToProps)(TableViewContainer);
