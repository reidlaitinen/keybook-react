import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {Header, Grid, Divider} from 'semantic-ui-react';
import SideNav from './SideNav';
import DeviceList from './DeviceList';
import {getAllDevices} from '../actions/devices';

class AllDevices extends React.Component {

  componentDidMount() {
    console.log("dispatching getAllDevices")
    this.props.dispatch(getAllDevices)
  }

  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>All Devices</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='allDevices' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as='h2' textAlign='center'>All Devices Show Here</Header>
            <Divider hidden />
            <DeviceList />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showingDevices: state.devices
  }
}

export default connect(mapStateToProps)(AllDevices);