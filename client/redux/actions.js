const addListing = function addListing(posting) {
  return {
    type: 'ADD_LISTING',
    posting,
  };
};

export default addListing;
