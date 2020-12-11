import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { Button } from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <Button
            type="button"
            onClick={() => {
              this.props.history.push('/register-options');
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
