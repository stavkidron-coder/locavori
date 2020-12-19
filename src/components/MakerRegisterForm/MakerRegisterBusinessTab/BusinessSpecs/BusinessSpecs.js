import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
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
                      <Input type="radio"></Input>
                        <Label>Commercial Food License (I can sell through resellers)</Label>
                    </Col>

                    <Col>
                      <Input type="radio"></Input>
                        <Label>Commercial Alcohol License</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input type="radio"></Input>
                        <Label>Cottage/Pickle Law License (I have a limited license)</Label>
                    </Col>

                    <Col>
                      <Input type="radio"></Input>
                        <Label>Other Type of License</Label>
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
                      <Input type="radio"></Input>
                        <Label>Farmer-Grower</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Forager</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Maker</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Distiller</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Brewer</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Winemaker</Label>
                    </Col>

                    <Col>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Cidery</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Roaster</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Apiary (bees)</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Women Owned</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>P.O.C. Owned</Label>
                        <br/>
                      <Input type="radio"></Input>
                        <Label>Other</Label>
                    </Col>
                  </Row>
              </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(BusinessSpecs));