import React, {Fragment} from 'react';
import {Header, Grid, Input, Divider} from 'semantic-ui-react';
import SideNav from './SideNav';
import DeviceList from './DeviceList';
import {searchDevices} from '../actions/devices';
import {connect} from 'react-redux';

class Search extends React.Component {

  state = {searchString: ''}

  handleSearch = (searchString) => {
    this.props.dispatch(searchDevices(searchString));
  }

  handleSearchChange = (e) => {
    this.setState({ searchString: e.target.value})
    if (this.state.searchString.length >= 3)
      this.handleSearch(this.state.searchString)
  }

  render() {

    let {searchString } = this.state

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Search!</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='search' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid icon='search' placeholder='Search...' autoFocus='true' onChange={this.handleSearchChange}/>
            <Divider hidden />
            {searchString.length !== null && searchString.length >= 3 ? <DeviceList /> : null}
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(Search);