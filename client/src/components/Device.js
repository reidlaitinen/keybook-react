import React from 'react';
import {setView} from '../actions/sideNav';
import {connect} from 'react-redux';

class Device extends React.Component {

  render() {

    let {device} = this.props;

    return <div>Device {device.name}</div>

  }

}

const mapStateToProps = (state) => {
  return {
    device: state.device
  }
}

export default connect(mapStateToProps)(Device);