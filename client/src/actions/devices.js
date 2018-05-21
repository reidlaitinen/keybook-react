import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getAllDevices = () => {
  return(dispatch) => {
    axios.get('/api/devices')
      .then( res => {
        dispatch({  type: 'GET_DEVICES', devices: res.data, headers: res.headers })
      }).catch( ({ headers }) => {
        dispatch(setHeaders(headers));
        dispatch(setFlash('Failed To Retrieve Devices', 'red'));
    });
  }
}

export const searchDevices = (query) => {
  return(dispatch) => {
    axios.get(`api/devices/search?query=${query}`)
      .then( res => {
        dispatch({ type: 'SEARCH_DEVICES', devices: res.data, headers: res.headers })
      }).catch( ({headers }) => {
        dispatch(setHeaders(headers));
        dispatch(setFlash('Failed to Retrieve Devices', 'red'));
      });
  }
}

export const setDevice = (id) => {
  return(dispatch) => {
    dispatch({ type: 'SET_DEVICE', device: id})
  }
}