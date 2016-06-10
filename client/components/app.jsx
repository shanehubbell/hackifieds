import React from 'react';
<<<<<<< 8d98058f249c4dd8dca5db69d6624a3318b325a6
import Navigation from './Navigation.jsx';
import Home from './HomeContainer.jsx';
=======
import { Link } from 'react-router';

const Nav = () => (
  <div className="header pure-menu-heading">
    <div className="pure-menu pure-menu-fixed pure-menu-horizontal home-menu">
      <nav className="pure-menu-list">
        <ul>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/">HackBnB</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/listings">See Listings</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/add-listing"> Post a Listing</Link>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link" href="/auth/github"> Github </a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link" href="/listing-detail"> Listing Detail (will remove) </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
>>>>>>> minor updates to the listing view screen

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
