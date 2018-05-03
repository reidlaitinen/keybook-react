import React from 'react';
import {Menu} from 'semantic-ui-react';

class SideNav extends React.Component {

  state = {activeItem: null}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let {activeItem} = this.state;    
    return (
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

    )
  }

}

export default SideNav