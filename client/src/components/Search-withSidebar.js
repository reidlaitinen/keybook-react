import React, {Fragment} from 'react';
import {Header, Grid, Input, Divider, Sidebar, Segment, Menu} from 'semantic-ui-react';
import SideNav from './SideNav';
import DeviceList from './DeviceList';
import {searchDevices} from '../actions/devices';
import {connect} from 'react-redux';

class Search extends React.Component {

  state = { searchString: '', sidebar: true }

  handleSearch = (searchString) => {
    this.props.dispatch(searchDevices(searchString));
  }

  handleSearchChange = (e) => {
    this.setState({ searchString: e.target.value})
    if (this.state.searchString.length >= 3)
      this.handleSearch(this.state.searchString)
  }

  toggleVisibility = () => this.setState({ visible: !this.state.sidebar })

  render() {

    let { searchString, sidebar } = this.state

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Search!</Header>
        
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              height="auto"
              as={Menu}
              animation='push'
              width='thin'
              visible={sidebar}
              icon='labeled'
              vertical
            >
          </Sidebar>
          </Sidebar.Pushable>
          <Sidebar.Pusher>
            <Input fluid icon='search' placeholder='Search...' autoFocus='true' onChange={this.handleSearchChange}/>
            <Divider hidden />
            {searchString.length !== null && searchString.length >= 3 ? <DeviceList /> : null}
          </Sidebar.Pusher>
          
        
      </Fragment>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(Search);