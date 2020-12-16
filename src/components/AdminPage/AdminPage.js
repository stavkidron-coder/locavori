import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MakerRegisterForm from '../MakerRegisterForm/MakerRegisterForm';
import AdminTabs from './AdminTabs/AdminTabs';

class AdminPage extends Component {

  render() {
    return (
      <div>
          <h1>Register as Maker</h1>
          <AdminTabs/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
