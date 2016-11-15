import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import reducer from './reducer.js'
import App from './components/App';
import {PageContainer} from './components/Page';
import { setState } from './action_creators';

const store = createStore(reducer);
store.dispatch(setState(null));

const routes = <Route component={App}>
  <Route path="/" component={PageContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

