import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';
import DesktopNav from '../Navbars/DesktopNav';

class LoginPage extends Component {
  render() {
    return (
      <>
      <DesktopNav/>
      <div className="loginBody">
        
        <LoginForm />
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
