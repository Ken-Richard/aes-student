import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import reducer from './reducer.js'
import App from './components/App';
import Welcome from './components/Welcome';
import { PageContainer } from './components/Page';
import { updateBookmark } from './action_creators';
import { onPageChange } from './bookmark'

const store = createStore(reducer);

const routes = <Route component={App}>
  <Route path="/" component={Welcome} />
  <Route path="/pages/:page_number" component={PageContainer} onEnter={onPageChange}/>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

