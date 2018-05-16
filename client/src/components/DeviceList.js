import React, {Fragment} from 'react';
import {Header, Table} from 'semantic-ui-react';
import {connect} from 'react-redux';

class DeviceList extends React.Component {

  resultsTable = () => {
    let {devices} = this.props;
    if (devices !== null) {
      console.log('devices not nul')
      devices.map( d => {
        <Table.Row>
          <Table.Cell>{d.name}</Table.Cell>
          <Table.Cell>{d.ip_address}</Table.Cell>
          <Table.Cell>{d.location}</Table.Cell>
        </Table.Row>
      })
    }
    else {console.log('devices null')}
  }

  render() {
    let devices = this.props.devices;
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
            <Table.Row>
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

const mapStateToProps = (state) => {
  return {
    devices: state.devices
  }
}

export default connect(mapStateToProps)(DeviceList);