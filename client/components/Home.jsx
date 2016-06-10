import React from 'react';

const Home = (props) => (
  <div className="home">
    <h1>This is the main splash page</h1>
    {props.children}
  </div>
);

Home.propTypes = {
  children: React.PropTypes.object,
};

export default Home;
