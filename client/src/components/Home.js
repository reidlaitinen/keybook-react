import React, { Component, Fragment } from 'react';
import { Header, Grid, Input, Menu } from 'semantic-ui-react';

class Home extends Component {

  state = {activeItem: null}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Fragment>
        <Header as='h1' textAlign='center'>KeyBook</Header>
        <Grid columns='equal'>
          <Grid.Column>
            <Menu vertical>
              <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                Search
              </Menu.Item>
              <Menu.Item name='allDevices' active={activeItem === 'allDevices'} onClick={this.handleItemClick}>
                All Devices
              </Menu.Item>
              <Menu.Item name='userMgmt' active={activeItem === 'userMgmt'} onClick={this.handleItemClick}>
                User Management
              </Menu.Item>
            </Menu>
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
