// @flow

import express from 'express';
import { Server } from 'http';

import routing from './routing';

const app = express();
// flow-disable-next-line
const http = Server(app);

app.use('', express.static('dist'));

routing(app);

http.listen(8080, () => {
  console.log('Server running on port 8080');
});
