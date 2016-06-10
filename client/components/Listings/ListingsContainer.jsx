import React, { Component } from 'react';
import Listings from './Listings.jsx';
import { connect } from 'react-redux';
import store from '../../redux/store';
import actions from '../../redux/actions';
import api from '../../api.js';
import _ from 'lodash';
// import { setListings } from '../api/listings';
class ListingsContainer extends Component {

  componentWillMount() {
    this.getListings();
  }

  getListings() {
    api.getListings()
      .then(response => {
        _.each(response.data, (item) => {
          const listing = item;
          // Converts the pictures array (currently stringified) back into an array
          listing.pictures = JSON.parse(listing.pictures);
        });

        store.dispatch(actions.setListings(response.data));
        store.dispatch(actions.setFilteredListings(response.data));
      });
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
    filteredListings: state.filteredListings,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
