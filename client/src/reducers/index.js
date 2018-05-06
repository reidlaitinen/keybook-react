import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import sideNav from './sideNav';
import devices from './devices';

const rootReducer = combineReducers({
  user,
  flash,
  sideNav,
  devices
});

export default rootReducer;
