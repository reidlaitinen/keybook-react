import React, { Component, Fragment } from 'react';
import { Header, Grid, Input, Menu } from 'semantic-ui-react';
import SideNav from './SideNav';

class Home extends Component {


  render() {
    
    return (
      <Fragment>
        <Header as='h1' textAlign='center'>KeyBook</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input fluid icon='search' placeholder='Search...' autofocus='true' />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>

    );
  }
}

export default Home;
