import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/reducer-index';

const routerMW = routerMiddleware(history);
const loggerMW = createLogger();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      routerMW,
      loggerMW
    )
  )
);

export default store;
