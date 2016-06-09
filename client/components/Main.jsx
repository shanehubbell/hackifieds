import React from 'react';
import { Link } from 'react-router';


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

const Main = (props) => (
  <div>
    <h1>
      <Link to="/">HackB2B</Link>
      <Link to="/listings">Listings</Link>
    </h1>
    {props.children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;
