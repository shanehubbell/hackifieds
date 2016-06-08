import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initalState = { listings: {} }) {
  return finalCreateStore(reducer, initalState);
}
