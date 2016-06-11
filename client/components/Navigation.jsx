import React from 'react';
import { Link } from 'react-router';

const AuthenticatedLinks = () => (
  <span>
    <li className="pure-menu-item">
      <Link className="pure-menu-link" to="/listings">HackBnB</Link>
    </li>
    <li className="pure-menu-item">
      <Link className="pure-menu-link" to="/add-listing"> Post a Listing</Link>
    </li>
    <li className="pure-menu-item">
      <a className="pure-menu-link" href="/logout"> Logout </a>
    </li>
  </span>
);

const Navigation = (props) => (
  <nav className="header pure-menu-heading">
    <div className="pure-menu pure-menu-fixed pure-menu-horizontal home-menu">
      <nav className="pure-menu">
        <ul className="pure-menu-list">
          {props.auth.isAuthenticated ? <AuthenticatedLinks /> : <span />}
        </ul>
      </nav>
    </div>
  </nav>
);

Navigation.propTypes = {
  auth: React.PropTypes.object,
};

export default Navigation;
