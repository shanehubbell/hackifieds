import React, { Component } from 'react';
import Listings from './Listings.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../../redux/store';
import actions from '../../redux/actions';
// import { setListings } from '../api/listings';

class ListingsContainer extends Component {

  componentWillMount() {
    // setListings();
    // do an api call to get the data
    // send dispatch to update the listings and
    // set displayedListings to listings as well
  }

  getListings() {
    axios.get('http://localhost:8000/api/listings')
      .then(listings => {
        store.dispatch(actions.setListings(listings));
        store.dispatch(actions.setFilteredListings(listings));
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
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
