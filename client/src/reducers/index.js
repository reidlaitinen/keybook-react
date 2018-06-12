import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import sideNav from './sideNav';
import devices from './devices';
import device from './device';
import searchString from './searchString';
import credentials from './credentials';

const rootReducer = combineReducers({
  user,
  flash,
  sideNav,
  devices,
  device,
  searchString,
  credentials
});

export default rootReducer;
