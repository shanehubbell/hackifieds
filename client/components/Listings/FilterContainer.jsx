import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Filter from './Filter.jsx';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        private: true,
        price: 3000,
      },
    };
    this.handlePrivateChange = this.handlePrivateChange.bind(this);
  }

  handlePrivateChange(e) {
    this.setState({
      options: {
        private: e.target.value,
        price: this.state.options.price,
      },
    });
    this.props.updateFilter(this.state.options, this.props.listings);
    console.log('heres filtered data...', this.props.filteredListings);
  }

  render() {
    return (
      <Filter
        {...this.props}
        handlePrivateChange={this.handlePrivateChange}
        options={this.state.options}
      />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    filteredListings: state.filteredListings,
    listings: state.listings,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateFilter(options, listings) { dispatch(actions.updateFilteredListings(options, listings)); },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
