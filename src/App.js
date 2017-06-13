// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dev from './containers/Dev';
import Test from './containers/Test';
import './stylesheets/styles.scss';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={(props) => <Dev {...props} />} />
      <Route path="/testing" render={(props) => <Test {...props} />} />
    </div>
  </Router>
);

export default App;
