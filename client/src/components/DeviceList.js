import React, {Fragment} from 'react';
import {Header, Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setView} from '../actions/sideNav';

class DeviceList extends React.Component {

  handleDeviceClick = () => {
    this.props.dispatch(setView('device'));
  }

  render() {
    let {devices} = this.props;
    return (
      <Fragment>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>IP Address</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {devices.map( d => (
            <Table.Row style={styles.pointer} onClick={() => this.handleDeviceClick}>
              <Table.Cell>{d.name}</Table.Cell>
              <Table.Cell>{d.ip_address}</Table.Cell>
              <Table.Cell>{d.location}</Table.Cell>
            </Table.Row>
          ))}
          </Table.Body>
        </Table>
      </Fragment>
    ) 
  }

}

const styles = {
  pointer: {
    cursor: 'pointer'
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.devices
  }
}

export default connect(mapStateToProps)(DeviceList);