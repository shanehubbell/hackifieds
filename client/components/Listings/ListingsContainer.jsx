import React, { Component } from 'react';
import Listings from './Listings.jsx';
import { connect } from 'react-redux';
// import { setListings } from '../api/listings';

class ListingsContainer extends Component {

  componentWillMount() {
    // setListings();
    // do an api call to get the data
    // send dispatch to update the listings and
    // set displayedListings to listings as well
  }

  render() {
    return (
      <Listings {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
