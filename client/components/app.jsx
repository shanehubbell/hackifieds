import React from 'react';
import Navigation from './Navigation.jsx';
import Home from './HomeContainer.jsx';

const App = (props) => (
  <div className="header pure-menu-heading">
    <Navigation />
    {props.isAuthenticated ?
      <main>
        {props.children}
      </main> :
      <Home />}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
