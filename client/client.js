import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App.jsx';
import Listings from './components/Listings.jsx';
import AddListing from './components/AddListing.jsx';

import { Router, Route } from 'react-router';
import store, { history } from './redux/store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/listings" component={Listings} />
        <Route path="/add-listings" component={AddListing} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));

// render(<App />, document.getElementById('app'));
