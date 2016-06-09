import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, {}];

    case 'SET_LISTINGS':
      console.log('SET_LISTINGS==>>', action.listings);
      console.log('STATE====>', state);
      return Object.assign({}, state, action.listings);

    default:
      return state;
  }
};

const filteredListingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTERED_LISTINGS':
      return Object.assign({}, state, action.filteredListings);

    default:
      return state;
  }
};

const rootReducer = combineReducers(
  {
    filteredListings: filteredListingsReducer,
    listings: listingsReducer,
    routing: routerReducer,
  }
);

export default rootReducer;
