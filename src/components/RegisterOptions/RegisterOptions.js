import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from 'reactstrap';

class RegisterOptions extends Component {

  registerRoute = (route) => {
    if (route === 'maker'){
      this.props.history.push('/maker-registration')
    }
    else if (route === 'user'){
      this.props.history.push('/user-registration')
    }
    return;
  }

  render() {
    return (
      <div className="registerOptionsBody">
        <div className="registerOptionsCard">
          <h1>Register Options</h1>
          <Button onClick={() => this.registerRoute('maker')}>Register as Maker</Button>
          <Button onClick={() => this.registerRoute('user')}>Register as User</Button>
        </div>
          
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterOptions));