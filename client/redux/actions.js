const actions = {
  addListing(posting) {
    return {
      type: 'ADD_LISTING',
      posting,
    };
  },
  setListings(listings) {
    return {
      type: 'SET_LISTINGS',
      listings,
    };
  },
  setFilteredListings(filteredListings) {
    return {
      type: 'SET_FILTERED_LISTINGS',
      filteredListings,
    };
  },
};

export default actions;
