import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducer-index';

const loggerMiddleware = createLogger();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(loggerMiddleware)
  )
);

export default store;
