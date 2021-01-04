import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MakerRegisterForm from '../MakerRegisterForm/MakerRegisterForm';
import DesktopNav from '../../Navbars/DesktopNav';

class MakerRegisterPage extends Component {

  render() {
    return (
      <div>
        <DesktopNav/>
          <h1>Register as Maker</h1>
          <MakerRegisterForm/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MakerRegisterPage);
