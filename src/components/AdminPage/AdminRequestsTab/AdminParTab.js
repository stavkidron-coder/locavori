import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";



class AdminPARTab extends Component {

  render() {
    return (
      <h1>Approval Request Pending</h1>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(AdminPARTab));