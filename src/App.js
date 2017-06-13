// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Dev from './containers/Dev';
import Test from './containers/Test';
import './stylesheets/styles.scss';

const history = createHistory();

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Dev} />
      <Route path="/testing" component={Test} />
    </div>
  </ConnectedRouter>
);

export default App;
