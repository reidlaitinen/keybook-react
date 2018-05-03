import React, {Fragment} from 'react';
import {Header, Grid} from 'semantic-ui-react';
import SideNav from './SideNav';

class UserManagement extends React.Component {

  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>User Management</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='userMgmt'/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>User Management Happens Here</Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

export default UserManagement;