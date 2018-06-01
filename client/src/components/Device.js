import React, {Fragment} from 'react';
import {Header, Grid, Input, Divider, Card, Form} from 'semantic-ui-react';
import SideNav from './SideNav';
import {setView} from '../actions/sideNav';
import {connect} from 'react-redux';

class Device extends React.Component {

  render() {

    let {device, sideNav} = this.props;

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Device Details</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem={sideNav} />
          </Grid.Column>
          <Grid.Column width={10}>
              <Card fluid
                header={device.name}
                meta={device.ip_address}
                description={device.description}
              />
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
    device: state.device,
    sideNav: state.sideNav
  }
}

export default connect(mapStateToProps)(Device);