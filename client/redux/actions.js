import _ from 'lodash';

const actions = {
  addListing(posting) {
    return {
      type: 'ADD_LISTING',
      posting,
    };
  },

  setListings(listings) {
    // console.log('actions.js setListings() ==>', listings);
    return {
      type: 'SET_LISTINGS',
      listings,
    };
  },

  setFilteredListings(filteredListings) {
    // console.log('actions.js setFilteredListings() ==>', filteredListings);
    return {
      type: 'SET_FILTERED_LISTINGS',
      filteredListings,
    };
  },

  updateFilteredListings(options, listings) {
    // filter all the listings based on options
    let filteredListings = _.reduce(listings, (acc, curr, key) => {
      const newListings = acc;
      if (curr.private === options.private &&
        curr.price <= options.price) {
        newListings[key] = curr;
      }
      return newListings;
    }, {});

    // filteredListings = Object.keys(filteredListings).length ? filteredListings : listings;

    return {
      type: 'SET_FILTERED_LISTINGS',
      filteredListings,
    };
  },
};

export default actions;
