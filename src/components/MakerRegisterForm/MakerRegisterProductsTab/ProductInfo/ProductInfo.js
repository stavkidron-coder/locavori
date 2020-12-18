import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import ProductTypePrepared from './ProductTypePrepared/ProductTypePrepared';
import ProductTypeFresh from './ProductTypeFresh/ProductTypeFresh';

class ProductInfo extends Component {

    

    render(){
        return(
            <>
            <h4>Availability</h4>
                <FormGroup>
                    <Col>
                        <p>Is your product available year round or limited availability?*</p>
                        <Input type="radio"></Input>
                            <Label>Available All Year</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Limited Availability</Label>
                        <br></br>
                    </Col>
                </FormGroup>

            <h4>Product Types</h4>
                <FormGroup>
                    <Col>
                        <p>Do you have any prepared/packaged, shelf-stable, or refrigerated food product types that apply to your offerings?*</p>
                        <Input type="radio"></Input>
                            <Label>No</Label>
                        <br></br>
                        <ProductTypePrepared/>
                        <br></br>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <p>Do you have any fresh food product types that you grow/raise?*</p>
                        <Input type="radio"></Input>
                            <Label>No</Label>
                        <br></br>
                        <ProductTypeFresh/>
                        <br></br>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <p>Do you have any beverage product types that apply to your offerings?*</p>
                        <Input type="radio"></Input>
                            <Label>No</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Yes</Label>
                            {/* lead to another component with list */}
                        <br></br>
                    </Col>
                </FormGroup>

                <br></br>
                <FormGroup>
                    <h6>Which categories do your products fit into?</h6>
                    <p>Select all that apply</p>
                    <Row>
                        <Col>
                            <Input type="radio"></Input>
                                <Label>Snack</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Sweet Treat</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Salty/Savory Treat</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Healthy</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Gluten Free</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Vegan</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Dairy Free</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Organic</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Majority of your product is locally grown (grown within your state or neighboring state)</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Fair Trade Sourced</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Farmer/Grower made</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Small Batch</Label>
                        </Col>
                        <Col>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Handmade</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Non GMO</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>No Trans Fats</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>No High Fructose Corn Syrup</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Nitrate Free</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Award Winning</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Keto/Low Carb</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Nut Free</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Kosher</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Low Sodium</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Gift</Label>
                            <br></br>
                            <Input type="radio"></Input>
                                <Label>Other</Label>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <h6>What are a few of your specialties?</h6>
                        <p>Flavors, best-sellers, etc.</p>
                            <Input type="text" placeholder="This will be displayed"></Input>

                    <h6>List any related awards you have won or been a finalist for:</h6>
                        <p>Separate each item with a comma</p>
                            <Input type="text" placeholder="For example: MN State Fair grand champion"></Input>

                    <h6>What makes your products unique?</h6>
                        <p>We love to hear this!</p>
                            <Input type="text" placeholder="This will be displayed"></Input>
                </FormGroup>

            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductInfo));