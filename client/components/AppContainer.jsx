import React, { Component } from 'react';
import App from './App.jsx';
import { connect } from 'react-redux';
import store from '../redux/store';
import actions from '../redux/actions';
// import { setListings } from '../api/listings';
class AppContainer extends Component {
  render() {
    return (
      <App {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
