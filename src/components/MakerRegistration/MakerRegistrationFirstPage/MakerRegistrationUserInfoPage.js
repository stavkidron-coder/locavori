import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import PageOneForm from '../MakerRegistrationFirstPage/MakerRegisterUserInfoForm';

class MakerRegisterPageOne extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="userRegisterBody">
        <PageOneForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MakerRegisterPageOne);