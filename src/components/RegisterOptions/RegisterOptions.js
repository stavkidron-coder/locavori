import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RegisterOptions.css';
import MakerToolTip from './MakerToolTip';
import UserToolTip from './UserToolTip';

class RegisterOptions extends Component {

  registerRoute = (route) => {
    if (route === 'maker'){
      this.props.history.push('/maker-registration')
    }
    else if (route === 'user'){
      this.props.history.push('/user-registration')
    }
    return;
  }

  render() {
    return (
      <div className="registerOptionsBody">

        <div className="registerOptionsCard">

          <h1>Register Options</h1>
          <hr className="registerOptionsHr"/>

          <div className="buttonsContainer">
            <MakerToolTip/>
            <UserToolTip/>
          </div>
          
        </div> 

      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterOptions));