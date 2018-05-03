import React, { Component} from 'react';
import Search from './Search';
import AllDevices from './AllDevices';
import UserManagement from './UserManagement';
import {connect} from 'react-redux';

class Home extends Component {


  render() {

    switch(this.props.sideNav) {
      case 'search':
        return <Search />
      case 'allDevices':
        return <AllDevices />
      case 'userMgmt':
        return <UserManagement />
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
