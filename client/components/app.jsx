import React from 'react';
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
        </ul>
      </nav>
    </div>
  </div>
);

const App = (props) => (
  <div className="header pure-menu-heading">
    <Nav />
    <br /><br /><br /><br />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
