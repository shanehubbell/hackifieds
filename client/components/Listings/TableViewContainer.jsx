import React, { Component } from 'react';
import TableView from './TableView.jsx';
import { connect } from 'react-redux';

class TableViewContainer extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <TableView {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    displayedListings: state.displayedListings,
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableViewContainer);
