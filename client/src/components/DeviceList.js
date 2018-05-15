import React from 'react';
import {Header, Table} from 'semantic-ui-react';
import {connect} from 'react-redux';

class DeviceList extends React.Component {

  render() {
    return <Header as='h2'>Device List Component</Header>
  }

}

const mapStateToProps = (state) => {
  return {
    devices: state.devices
  }
}

export default connect(mapStateToProps)(DeviceList);