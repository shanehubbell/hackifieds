import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePrivate = this.handleChangePrivate.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log('TARGET===>', e.target.private);
    this.setState({
      options: {
        private: e.target.private,
        price: +e.target.price,
      },
    });
    console.log('This should be activated on every change...', this.state.options.private);
    this.props.updateFilter(this.state.options, this.props.listings);
  }

  handleChangePrivate() {
    this.setState({
      options: {
        private: !this.state.private,
        price: this.state.price,
      },
    });
    console.log('OPTIONS STATE AFTER CHECK', this.state.options);
  }

  render() {
    return (
      <div>
        <h2>Filtering options here....</h2>
        <form>
          <label>Private </label>
          <input
            type="checkbox" onChange={this.handleChangePrivate}
            defaultValue="true" checked={this.state.options.private} name="private"
          />
          {' '}
          <label>Price</label>
          <input type="text" name="price" />
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
    updateFilter(options, listings) { dispatch(actions.updateFilteredListings(options, listings)); },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
