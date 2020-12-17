import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import Navbar from './PARNavBar';


class AdminPARTab extends Component {

  render() {
    return (
        <>
                <h1>Approval Request Pending</h1>  
                <Navbar/>         
        </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(AdminPARTab));