import React, {Fragment} from 'react';
import {Header, Grid, Input, Divider, Button} from 'semantic-ui-react';
import SideNav from './SideNav';
import DeviceList from './DeviceList';
import {searchDevices} from '../actions/devices';
import {setSearchString} from '../actions/searchString';
import {connect} from 'react-redux';

class Search extends React.Component {

  // state = {searchString: this.props.searchString}

  componentDidMount() {
    if (this.props.searchString.length >= 3) {
      this.props.dispatch(searchDevices(this.props.searchString))
    }
  }

  handleSearch = (searchString) => {
    this.props.dispatch(searchDevices(searchString));
  }

  handleSearchChange = (e) => {
    this.props.dispatch(setSearchString(e.target.value))
    if (this.props.searchString.length >= 3)
      this.handleSearch(this.props.searchString)
  }

  clearSearch = () => {
    this.props.dispatch(setSearchString(""));
  }

  render() {

    let {searchString } = this.props

    let placeholder;
    if (searchString === "") {
      placeholder = 'Search...'
    } else {
      placeholder = searchString
    }

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Search!</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='search' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Button onClick={this.clearSearch}>Clear</Button>
            <Input fluid icon='search' placeholder={placeholder} autoFocus='true' onChange={this.handleSearchChange}/>
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
    searchString: state.searchString
  }
}

export default connect(mapStateToProps)(Search);