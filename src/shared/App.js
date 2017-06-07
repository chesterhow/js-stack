// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dev from './containers/Dev';
import Test from './containers/Test';
import './stylesheets/styles.scss';

import {
  DEV_PAGE_ROUTE,
  TEST_PAGE_ROUTE
} from './routes';

const App = () => (
  <Switch>
    <Route exact path={DEV_PAGE_ROUTE} component={Dev} />
    <Route path={TEST_PAGE_ROUTE} component={Test} />
  </Switch>
);

export default App;
