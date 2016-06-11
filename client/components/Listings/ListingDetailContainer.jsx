import React from 'react';
import ListingDetail from './ListingDetail.jsx';
import { connect } from 'react-redux';

const ListingDetailContainer = (props) => (
// rendering a single listing, and passing it a
// single listing
  <div>
    <ListingDetail listing={props.listings[props.params.id]} />
  </div>
);

// mapping state to props, grabbing the listings
const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

ListingDetailContainer.propTypes = {
  listings: React.PropTypes.object,
  params: React.PropTypes.object,
};

// May need to add a dispatch, if we want to have
// a contact owner action
export default connect(mapStateToProps)(ListingDetailContainer);
