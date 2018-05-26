import React, {Fragment} from 'react';
import {Header, Grid} from 'semantic-ui-react';
import SideNav from './SideNav';

class Settings extends React.Component {

  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Settings Component</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='settings'/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>Settings Component</Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

export default Settings;