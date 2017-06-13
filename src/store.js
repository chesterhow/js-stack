import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/reducer-index';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger),
  )
);

export default store;
