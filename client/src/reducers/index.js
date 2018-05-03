import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import sideNav from './sideNav';

const rootReducer = combineReducers({
  user,
  flash,
  sideNav
});

export default rootReducer;
