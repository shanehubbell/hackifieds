import React, { Component } from 'react';
// import Filter from './Filter.jsx';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        private: true,
        price: 3000,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      options: {
        private: e.target.private,
        price: +e.target.price,
      },
    });
    console.log('This should be activated on every change...');
    this.props.updateFilter(this.state.options, this.props.listings);
  }

  render() {
    return (
      <div>
        <h2>Filtering options here....</h2>
        <form onChange={this.handleChange}>
          <input type="checkbox" checked={this.state.private} name="private" />
          <label>Private</label>
          <input type="text" name="price" /><label>Price</label>
        </form>
      </div>
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
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    updateFilter(options, listings) { dispatch(actions.updateFilteredListings(options, listings));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
