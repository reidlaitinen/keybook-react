import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getDevice = (id) => {
  return(dispatch) => {
    axios.get(`/api/devices/${id}`)
      .then( res => {
        dispatch({  type: 'GET_DEVICE', device: res.data, headers: res.headers })
      }).catch( ({ headers }) => {
        dispatch(setHeaders(headers));
        dispatch(setFlash('Failed To Retrieve Device', 'red'));
    });
  }
}