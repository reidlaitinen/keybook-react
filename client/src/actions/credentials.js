import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getDeviceCreds = (device_id) => {
  return(dispatch) => {
    axios.get(`/api/devices/${device_id}/credentials`)
      .then( res => {
        dispatch({ type: 'GET_DEVICE_CREDS', credentials: res.data, headers: res.headers})
      }).catch( ({headers}) => {
        dispatch(setHeaders(headers))
        dispatch(setFlash(`Failed to retrieve credentials for Device ${device_id}`))
      });
  }
}