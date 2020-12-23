import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';




class BusinessSpecs extends Component {
    render(){
        return(

          <>
            <br/>
            <h4>Web Presence</h4>
            <hr/>
            
              <FormGroup>

                <Row>
                  <Col>
                    <Label>Website
                    <Input type="text" placeholder="URl"></Input>
                    </Label>
                  </Col>

                  <Col>
                    <Label>Facebook
                    <Input type="text" placeholder="URL"></Input>
                    </Label>
                  </Col>

                  <Col>
                    <Label>Instagram
                    <Input type="text" placeholder="URL"></Input>
                    </Label>
                  </Col>

                  <Col>
                    <Label>Public Email Address
                    <Input type="text" placeholder=""></Input>
                    </Label>
                  </Col>
                </Row>

              </FormGroup>
    
            <br/>
            
            <h4>Business License</h4>
            <hr/>

              <FormGroup>
                
                <Label>Do you have a business food/liquor license that allows you to sell to the public?*</Label>
                  <Row>
                    <Col>
                      <Label check>
                        <Input type="checkbox" value="commercial"/>
                          Commercial Food License (I can sell through resellers)
                      </Label>
                    </Col>

                    <Col>
                      <Label check>
                        <Input type="checkbox" value="alcohol"/>
                          Commercial Alcohol License
                        </Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label check>
                        <Input type="checkbox" value="cottage"/>
                        Cottage/Pickle Law License (I have a limited license)
                      </Label>
                    </Col>

                    <Col>
                      <Label check>
                        <Input type="checkbox" value="other"/>
                        Other Type of License 
                      </Label>
                    </Col>
                  </Row>

                <br/>

                  <Row>
                    <Col>
                      <Label>What State/Province is your license issued from and what is your license # and type of license?</Label>
                        <Input type="text" placeholder=""></Input>
                    </Col>
                  </Row>
              </FormGroup>
    
            <br/>

            <h4>Type of Business</h4>
            <hr/>

              <FormGroup>
                <Label>What type of business describes yours?*</Label>
                <p>select all that apply</p>
                  <Row>

                    <Col>
                      <Label check>
                        <Input type="checkbox" value="farmer"/>
                        Farmer-Grower
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="forager"/>
                        Forager 
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="maker"/>
                        Maker
                        </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="distiller"/>
                        Distiller 
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="brewer"/>
                        Brewer
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="winemaker"/>
                        Winemaker
                      </Label>
                    </Col>

                    <Col>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="cidery"/>
                        Cidery
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="roaster"/>
                        Roaster
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="apiary"/>
                        Apiary (bees)
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="woman_owned"/>
                        Women Owned
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="poc_owned"/>
                        P.O.C. Owned
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" value="other"/>
                        Other
                      </Label>
                    </Col>
                  </Row>
              </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(BusinessSpecs));