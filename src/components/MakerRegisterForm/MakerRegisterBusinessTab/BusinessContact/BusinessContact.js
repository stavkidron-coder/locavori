import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';
import StateDropdown from './StateDropdown/StateDropdown';


class BusinessContact extends Component {

    render() {
        return(
          <div>

            <h4>Contact Information</h4>
            <hr/>

            <FormGroup>

              <Row> 
                <Col>
                  <Label>Legal Business Name*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Public Business Name*
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Owner's First Name*
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Owner's Last Name*
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Owner's Email Address*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Owner's Contact Phone*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Alternative Phone
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
  
          <hr/>

            <FormGroup>
              <Row>
                <Col>
                  <Label>Business Address*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Suite #
                  <Input  className="makerAppInput"type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>City*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>

                <Col>
                  {/* state dropdown component */}
                  <StateDropdown/>
                </Col>

                <Col>
                  <Label>Zipcode*
                  <Input className="makerAppInput" type="text" placeholder="This will not be public"></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
  
          
          <h4>Public Address</h4>
          <hr/>

            <FormGroup>

              <Row>
                <Col>
                  <Label>Address
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Suite #
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>City
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>

                <Col>
                  {/* state dropdown component */}
                 <StateDropdown/>
                </Col>

                <Col>
                  <Label>Zipcode
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed"></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
            
          </div>
            

        )
    }
}




export default withRouter(connect(mapStoreToProps)(BusinessContact));