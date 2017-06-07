// @flow

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';

const renderApp = (location: string, routerContext: ?Object = {}) => {
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={routerContext}>
      <App />
    </StaticRouter>
  );

  return (
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JS Stack</title>
        <link href="styles.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="text/javascript" src="client.js"></script>
      </body>
    </html>`
  );
};

export default renderApp;
