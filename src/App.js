import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dev from './containers/Dev';
import Test from './containers/Test';
import './stylesheets/styles.scss';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Dev} />
      <Route path="/testing" component={Test} />
    </div>
  </Router>
);

export default App;
