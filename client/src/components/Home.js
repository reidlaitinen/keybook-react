import React, { Component, Fragment } from 'react';
import { Header, Grid, Input, Menu } from 'semantic-ui-react';
import Search from './Search';
import {connect} from 'react-redux';

class Home extends Component {


  render() {

    return (
      <Search />
    );
  }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps)(Home);
