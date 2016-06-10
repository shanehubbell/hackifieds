import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="header pure-menu-heading">
    <div className="pure-menu pure-menu-horizontal home-menu">
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
        </ul>
      </nav>
    </div>
  </nav>
);

export default Navigation;
