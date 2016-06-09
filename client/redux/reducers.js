import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, {}];

    case 'SET_LISTINGS':
      return Object.assign({}, state, {
        listings: action.listings,
      });

    case 'SET_FILTERED_LISTINGS':
      return Object.assign({}, {
        filteredListings: action.listings,
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers(
  { listings: listingsReducer, routing: routerReducer }
);

export default rootReducer;
