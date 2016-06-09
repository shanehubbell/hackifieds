import React from 'react';
import { Link } from 'react-router';

const Main = (props) => (
  <div>
    <h1>
      <Link to="/">HackB2B</Link>
      <Link to="/listings">Listings</Link>
    </h1>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;
