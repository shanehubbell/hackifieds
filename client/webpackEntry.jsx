import React from 'react';
import configureStore from './redux/store.js';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/app.jsx';

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
  categories: {},
};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
