import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterOptions extends Component {

  render() {
    return (
      <div>
          <h1>Register Options</h1>
          <Link>Register as Maker</Link>
          <Link to="/user-registration">Register as User</Link>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterOptions);