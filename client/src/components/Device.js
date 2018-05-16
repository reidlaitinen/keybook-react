import React from 'react';
import {setView} from '../actions/sideNav';

class Device extends React.Component {

  render() {

    let {device} = this.props;

    return <div>Device {device.name}</div>

  }
}

export default Device;