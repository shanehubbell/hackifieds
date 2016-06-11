import React from 'react';

const Home = (props) => (
  <div className="home">
    <div className="splash-container">
      <img id="splashimage" src="/assets/bb-night.jpg" />
      <div className="splash">
        <h1 className="splash-head">Hack Here, Grow Here, Live Here</h1>
        <p className="splash-subhead">Discover your home away from home...</p>
        <p>
          <a className="pure-button" href="/auth/github"> Login to Github </a>
        </p>
      </div>
    </div>
    <div className="content-wrapper" id="Adventure">

      <div className="content-material pure-u-">
        <div className="pure-u-md-1-3">
          <div className="l-box">
            <h2 className="is-center">Near Hack Reactor</h2>
            <p>Right in the heart of the city, Hack Reactor is
            within proximity to the magnificent landmarks, beautiful views,
            and of course, the abundance of food choices. Take your breaks
            away from hacking to enjoy lunch and dinner with your peers
            at the Pier or take a warm nap over at Yerba Buena park.</p>
          </div>
        </div>
        <div className="pure-u-md-1-3">
          <div className="l-box">
            <h2 className="is-center">Amazing City Life</h2>
              <p> When you're not building the next best thing, take some
              time to explore the city with your peers, and you'll come to realize
              that San Franciscans are some of the nicest people in the world. Whether
              its just a simple chat over coffee or partying it up on Polk street -
              unplanned-style - there's just something there for everybody.</p>
          </div>
        </div>
        <div className="pure-u-md-1-3">
          <div className="l-box">
            <h2 className="is-center">Live with other Hackers</h2>
            <p>HackBnB was made with love by hackers for hackers - we know what its like,
            because we've been there. Curated by existing students and alumni, every listing
            is posted by verified members of the Hack Reactor community, so you have that extra
            layer of comfort knowing that you can talk to those who are currently in the program
            or have graduated.</p>
          </div>
        </div>
      </div>

      <div className="footer l-box is-center">
        <p>
          Made with <span className="fa fa-heart" aria-hidden="true" /> at
          Hack Reactor - San Francisco, CA.
        </p>
      </div>
    </div>
    {props.children}
  </div>
);

Home.propTypes = {
  children: React.PropTypes.object,
};

export default Home;
