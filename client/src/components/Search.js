import React, {Fragment} from 'react';
import {Header, Grid, Input} from 'semantic-ui-react';
import SideNav from './SideNav';
import {connect} from 'react-redux';

class Search extends React.Component {

  state = {searchString: ''}

  handleSearchChange = (e) => {
    this.setState({ searchString: e.target.value})
  }

  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Search!</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='search' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid icon='search' placeholder='Search...' autoFocus='true' onChange={this.handleSearchChange}/>
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