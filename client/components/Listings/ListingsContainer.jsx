import React, { Component } from 'react';
import Listings from './Listings.jsx';
import { connect } from 'react-redux';
import store from '../../redux/store';
import actions from '../../redux/actions';
import api from '../../api.js';

class ListingsContainer extends Component {

  componentWillMount() {
    this.getListings();
  }

  getListings() {
    api.getListings()
      .then(response => {
        console.log('Here is the listings from the axios api call', response.data);
        store.dispatch(actions.setListings(response.data));
        store.dispatch(actions.setFilteredListings(response.data));
      });
  }

  render() {
    console.log('LISTINGS CONTAINER===>', this.props.listings);
    return (
      <Listings {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
    filteredListings: state.filteredListings,
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
