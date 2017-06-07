// @flow

import {
  DEV_PAGE_ROUTE,
  TEST_PAGE_ROUTE
} from '../shared/routes';

import renderApp from './render';

export default (app: Object) => {
  app.get(DEV_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(TEST_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });
};
