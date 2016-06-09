import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducers from './reducers';

const initialState = {
  listings: {
    1: {
      listingId: 1,
      userId: 123,
      address: '123 Street',
      lat: '37.82828828',
      lng: '-122.727323',
      distanceFromHackReactor: 2,
      price: 2000,
      bathrooms: 2,
      private: true,
      ownerName: 'Bob',
      ownerEmail: 'email@email.com',
      pictures: 'String',
      description: 'TEXT',
    },
    2: {
      listingId: 2,
      userId: 2985,
      address: '123 Sesame',
      lat: '37.82828828',
      lng: '-122.727323',
      distanceFromHackReactor: 1,
      price: 2500,
      bathrooms: 2,
      private: true,
      ownerName: 'Bob',
      ownerEmail: 'email@email.com',
      pictures: 'String',
      description: 'TEXT',
    },
  },
  filteredListings: {},
};

const store = createStore(reducers, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
