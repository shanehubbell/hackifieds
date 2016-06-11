import React, { Component } from 'react';
import ListingDetail from './ListingDetail.jsx';
import { connect } from 'react-redux';

class ListingDetailContainer extends Component {

  componentWillMount() {
  }

// rendering a single listing, and passing it a
// single listing
  render() {
    return (
      <div>
        <ListingDetail listing={this.props.listings[this.props.params.id]} />
        }
      </div>
    );
  }
}

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
