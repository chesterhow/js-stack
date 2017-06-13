import { combineReducers } from 'redux';
import { devTools, testTools } from './reducer-tools';

const rootReducer = combineReducers({
  devTools,
  testTools
});

export default rootReducer;
