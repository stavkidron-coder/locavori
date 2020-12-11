import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './HomePage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="grid-col grid-col_8">
            <h1>HOME PAGE</h1>
          </div>
          

            
          </div>
        </div>
      
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
