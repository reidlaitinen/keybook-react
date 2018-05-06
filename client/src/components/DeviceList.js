import React from 'react';
import {Header} from 'semantic-ui-react';
import {connect} from 'react-redux';

class DeviceList extends React.Component {

  render() {
    return <Header as='h2'>Device List Component</Header>
  }

}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(DeviceList);