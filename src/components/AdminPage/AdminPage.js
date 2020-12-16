import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MakerRegisterForm from '../MakerRegisterForm/MakerRegisterForm';

class AdminPage extends Component {

  render() {
    return (
      <div>
          <h1>Register as Maker</h1>
          
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
