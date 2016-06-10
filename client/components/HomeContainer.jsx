import React, { Component } from 'react';
import Home from './Home.jsx';
import { connect } from 'react-redux';
import store from '../redux/store';
import actions from '../redux/actions';
import api from '../api.js';
// import { setListings } from '../api/listings';
class HomeContainer extends Component {

  componentWillMount() {
    this.login();
  }

  login() {
    api.login()
      .then(response => {
        console.log('Reponse.data ==>', response.data);
        if (response.data === true) {
          store.dispatch(actions.setAuthentication(true));
        }
      });
  }

  render() {
    return (
      <Home {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
