import React from 'react';
import Navigation from './Navigation.jsx';
import Home from './HomeContainer.jsx';

const App = (props) => (
  <div className="header pure-menu-heading">
    <Navigation auth={props} />
    {props.isAuthenticated ?
      <main>
        {props.children}
      </main> :
      <Home />}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
  isAuthenticated: React.PropTypes.bool,
};

export default App;
