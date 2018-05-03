import React, {Fragment} from 'react';
import {Header, Grid} from 'semantic-ui-react';
import SideNav from './SideNav';

class AllDevices extends React.Component {

  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>All Devices</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='allDevices' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>All Devices Show Here</Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

export default AllDevices;