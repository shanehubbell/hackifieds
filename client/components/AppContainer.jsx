import React from 'react';
import App from './App.jsx';
import { connect } from 'react-redux';

const AppContainer = (props) => (
  <App {...props} />
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AppContainer);
