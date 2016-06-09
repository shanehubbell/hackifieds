import React, { Component } from 'react';
import Filter from './Filter.jsx';
import { connect } from 'react-redux';

class FilterContainer extends Component {
  render() {
    return (
      <Filter {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
