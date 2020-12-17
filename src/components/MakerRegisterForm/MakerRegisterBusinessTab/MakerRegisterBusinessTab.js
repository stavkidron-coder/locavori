import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
// import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';
import BusinessContact from './BusinessContact/BusinessContact';
import BusinessSpecs from './BusinessSpecs/BusinessSpecs';


class MakerRegisterBusinessTab extends Component {

  render() {
    return (

      <>
         {/* Business Tab */}
        <BusinessContact/>
        <BusinessSpecs/>
      </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterBusinessTab));