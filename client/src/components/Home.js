import React, { Component} from 'react';
import Search from './Search';
import AllDevices from './AllDevices';
import Device from './Device';
import UserManagement from './UserManagement';
import Settings from './Settings';
import {connect} from 'react-redux';

class Home extends Component {


  render() {

    switch(this.props.sideNav) {
      case 'search':
        return <Search />
      case 'allDevices':
        return <AllDevices />
      case 'settings':
        return <Settings />
      case 'userMgmt':
        return <UserManagement />
      case 'device':
        return <Device />
      default:
        return <Search />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sideNav: state.sideNav
  }
}

export default connect(mapStateToProps)(Home);
