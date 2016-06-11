import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import store from '../redux/store';
import actions from '../redux/actions';
import api from '../api.js';
import Home from './Home.jsx';

class HomeContainer extends Component {

  componentWillMount() {
    api.getLoginStatus()
      .then(response => {
        if (response.data === true) {
          store.dispatch(actions.setAuthentication(true));
          // Redirect user to main listings page if they're logged in.
          browserHistory.push('/listings');
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

export default connect(mapStateToProps)(HomeContainer);
