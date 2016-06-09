import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, {}];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ listings: reducer, routing: routerReducer });

export default rootReducer;
