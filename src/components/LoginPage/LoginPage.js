import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="loginBody">
        
        <LoginForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
