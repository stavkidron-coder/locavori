import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MakerRegisterForm from '../MakerRegisterForm/MakerRegisterForm';

class MakerRegisterPage extends Component {

  render() {
    return (
      <div>
          <h1>Register as Maker</h1>
          <MakerRegisterForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MakerRegisterPage);
