import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductDistro extends Component {

    render(){
        return(
            <>
            <hr/>
            <h4>Product Distribution</h4>
            <hr/>
            <FormGroup>

                <p>Where are your products sold now?*</p>
                <p>select all that apply</p>

                    <Row>
                        <Col>
                            <Input type="radio"></Input>
                                <Label>Local Grocery Stores</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Co-ops</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Farmers Market or other Public Markets</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Online on Amazon</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Online at Company Websites</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Gift or Subscription Box Companies</Label>
                        </Col>
                   
                        <Col>
                            <Input type="radio"></Input>
                                <Label>Retail Store, non-grocery</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Your place of business, farm or home</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Roadside Stand</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Local Delivery</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Curbside Pickup</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Shipping</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Other</Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p>May customers pick up products?*</p>
                            <Input type="radio"></Input>
                                <Label>Yes</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>No</Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you deliver?*</p>
                            <Input type="radio"></Input>
                                <Label>Yes</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>No</Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you ship your products?*</p>
                            <Input type="radio"></Input>
                                <Label>Yes</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>No</Label>
                            <br/>
                        </Col>
                    </Row>
            </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductDistro));