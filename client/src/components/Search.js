import React, {Fragment} from 'react';
import {Header, Grid, Input} from 'semantic-ui-react';
import SideNav from './SideNav';
import {connect} from 'react-redux';

class Search extends React.Component {


  render() {

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Search!</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem='search' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input fluid icon='search' placeholder='Search...' autofocus='true' />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </Fragment>
    )

  }

}

const mapStateToProps = () => {

}

export default connect(mapStateToProps)(Search);