import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from "react-router";

class MakerRegisterForm extends Component {

    submitBtn = () => {
        this.props.history.push('/home');
    }

  render() {
    return (
      <div>
          <h3>Maker Register Form</h3>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button onClick={this.submitBtn}>Submit Application</button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterForm));