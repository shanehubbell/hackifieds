// Required modules for react/redux/router
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

// Redux store files
import store from '../redux/store';
import actions from '../redux/actions';

// Helper api functions
import api from '../api.js';

// Component to render
import Home from './Home.jsx';

class HomeContainer extends Component {

  componentWillMount() {
    api.getLoginStatus()
      .then(response => {
        if (response.data === true) {
          store.dispatch(actions.setAuthentication(true));
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

const mapDispatchToProps = function mapDispatchToProps(/* dispatch */) {
  // you can 'dispatch' an action here based on the listing being clicked
  return {
    onClick: () => { console.log('Listing was clicked'); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
