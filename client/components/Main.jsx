import React from 'react';
import { Link } from 'react-router';

const Main = (props) => (
  <div>
    <h1>
      <Link to="/">HackB2B</Link><br />
      <Link to="/listings">Listings</Link><br />
      <Link to="/add-listings">Add Listings</Link><br />
    </h1>
    {props.children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }
//   render() {
//     return (<div> APP.JSX
//       <AddListing />
//     </div>);
//   }
// }
