import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Filter from './Filter.jsx';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        private: false,
        price: 3000,
      },
    };
    this.handlePrivateChange = this.handlePrivateChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handlePrivateChange(e) {
    this.setState({
      options: {
        private: e.target.checked,
        price: this.state.options.price,
      },
    });
  }

  handlePriceChange(e) {
    this.setState({
      options: {
        private: this.state.options.private,
        price: +e.target.value,
      },
    });
  }

  handleFormChange() {
    setTimeout(() => {
      this.props.updateFilter(this.state.options, this.props.listings);
    }, 100);
  }

  render() {
    return (
      <Filter
        {...this.props}
        handlePrivateChange={this.handlePrivateChange}
        handlePriceChange={this.handlePriceChange}
        handleFormChange={this.handleFormChange}

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
    updateFilter(options, listings) {
      dispatch(actions.updateFilteredListings(options, listings));
    },
  };
};

FilterContainer.propTypes = {
  updateFilter: React.PropTypes.func,
  listings: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
