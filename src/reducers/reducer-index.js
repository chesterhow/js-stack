import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { devTools, testTools } from './reducer-tools';

const rootReducer = combineReducers({
  devTools,
  testTools,
  router: routerReducer
});

export default rootReducer;
