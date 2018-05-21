import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import sideNav from './sideNav';
import devices from './devices';
import device from './device';
import searchString from './searchString';

const rootReducer = combineReducers({
  user,
  flash,
  sideNav,
  devices,
  device,
  searchString
});

export default rootReducer;
