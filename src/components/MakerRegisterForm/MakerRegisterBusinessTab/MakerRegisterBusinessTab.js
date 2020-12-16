import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';
import StateDropdown from './StateDropdown/StateDropdown';


class MakerRegisterBusinessTab extends Component {

  render() {
    return (


      <div>
         {/* Business Tab */}
        <h4>Contact Information</h4>
          <FormGroup>
            <Row> 
              <Col>
                <Label>Legal Business Name*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Public Business Name*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Owner's First Name*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                <Label>Owner's Last Name*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            
            </Row>
            <Row>
              <Col>
                <Label>Owner's Email Address*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Owner's Contact Phone*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Alternative Phone</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
            </Row>
          </FormGroup>

        <br></br>
          <FormGroup>
            <Row>
              <Col>
                <Label>Business Address</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Suite #</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>City*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
               <StateDropdown/>
              </Col>
              <Col>
                <Label>Zipcode*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
            </Row>
          </FormGroup>

        <br></br>
        <h4>Public Address</h4>
          <FormGroup>
            <Row>
              <Col>
                <Label>Address</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                <Label>Suite #</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>City*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
               <StateDropdown/>
              </Col>
              <Col>
                <Label>Zipcode*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
          </FormGroup>

        <br></br>
        <h4>Business Specs</h4>
          <FormGroup>
            <Row>
              <Col>
                <Label>Website</Label>
                <Input type="text" placeholder="URl"></Input>
              </Col>
              <Col>
                <Label>Facebook</Label>
                <Input type="text" placeholder="URL"></Input>
              </Col>
              <Col>
                <Label>Instagram</Label>
                <Input type="text" placeholder="URL"></Input>
              </Col>
              <Col>
                <Label>Public Email Address</Label>
                <Input type="text" placeholder=""></Input>
              </Col>
            </Row>
          </FormGroup>
      </div>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterBusinessTab));