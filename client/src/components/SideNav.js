import React from 'react';
import {Menu} from 'semantic-ui-react';
import {setView} from '../actions/sideNav';
import {connect} from 'react-redux';

class SideNav extends React.Component {

  state = {activeItem: this.props.activeItem}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.dispatch(setView(name));
  }

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
        <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
          Settings
        </Menu.Item>
        <Menu.Item name='userMgmt' active={activeItem === 'userMgmt'} onClick={this.handleItemClick}>
          User Management
        </Menu.Item>
      </Menu>

    )
  }

}

export default connect()(SideNav);