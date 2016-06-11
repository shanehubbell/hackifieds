import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import AppContainer from './components/AppContainer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import PostListingContainer from './components/PostListing/PostListingContainer.jsx';
import ListingDetailContainer from './components/Listings/ListingDetailContainer.jsx';

import { Router, Route } from 'react-router';
import store, { history } from './redux/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} >
        <Route path="/listings" component={MainContainer} />
        <Route path="/add-listing" component={PostListingContainer} />
        <Route path="/listing-detail/:id" component={ListingDetailContainer} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
