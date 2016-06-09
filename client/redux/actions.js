const actions = {
  addListing(posting) {
    return {
      type: 'ADD_LISTING',
      posting,
    };
  },
  setListings(listings) {
    console.log('HEre is the listings inside of actions', listings);
    return {
      type: 'SET_LISTINGS',
      listings,
    };
  },
  setFilteredListings(filteredListings) {
    console.log('HEre is the filtered listings inside of actions', filteredListings);
    return {
      type: 'SET_FILTERED_LISTINGS',
      filteredListings,
    };
  },
};

export default actions;
