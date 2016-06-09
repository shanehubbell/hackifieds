import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './reducer';

const initialState = {
  listings: {
    1: {
      lat: '37.82828828',
      lng: '-122.727323',
      price: 2000,
      bathrooms: 2,
      distanceFromHR: 2,
      crimeRate: 3,
      address: '123 Street',
      email: 'email@email.com',
      url: 'www.website.com',
      images: [],
      reviews: [],
    },
    2: {
      lat: '37.828228',
      lng: '-122.77323',
      price: 1000,
      bathrooms: 1,
      distanceFromHR: 3,
      crimeRate: 5,
      address: '123 Sesame',
      email: 'email@email.com',
      url: 'www.website.com',
      images: [],
      reviews: [],
    },
  },
};

const store = createStore(reducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
