import React, {Fragment} from 'react';
import {Header, Grid, Input, Divider, Card, Form} from 'semantic-ui-react';
import SideNav from './SideNav';
import {setView} from '../actions/sideNav';
import {getDeviceCreds} from '../actions/credentials';
import {connect} from 'react-redux';


class Device extends React.Component {

  getDeviceCreds = () => {
    this.props.dispatch(getDeviceCreds(this.props.device.id))
  }

  componentDidMount() {
    this.props.dispatch(getDeviceCreds(this.props.device.id));
  }

  render() {

    let {device, sideNav, credentials} = this.props;

    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Device Details</Header>
        <Grid columns='equal' padded>
          <Grid.Column>
            <SideNav activeItem={sideNav} />
          </Grid.Column>
          <Grid.Column width={10}>
              <Card fluid>
                <Card.Header as='h2'>{device.name}</Card.Header>
                <Card.Meta>{device.ip_address}</Card.Meta>
                <Divider hidden />
                <Card.Description>
                  <p>Description: {device.description}</p>
                  <p>MFG: {device.mfg}</p>
                  <p>Model No.: {device.model_number}</p>
                  <p>Serial No.: {device.serial_number}</p>
                </Card.Description>
              </Card>
              <Card.Group>
                
              </Card.Group>
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
    sideNav: state.sideNav,
    credentials: state.credentials
  }
}

export default connect(mapStateToProps)(Device);