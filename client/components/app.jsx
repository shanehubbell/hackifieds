import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';
import Main from './Main.jsx';

const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
