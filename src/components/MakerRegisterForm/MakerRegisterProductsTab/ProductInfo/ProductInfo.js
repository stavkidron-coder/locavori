import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, FormGroup, Label, Input } from 'reactstrap';
import ProductTypePrepared from './ProductTypePrepared/ProductTypePrepared';
import ProductTypeFresh from './ProductTypeFresh/ProductTypeFresh';
import ProductTypeBeverage from './ProductTypeBeverage/ProductTypeBeverage';
import ProductCategories from './ProductCategories/ProductCategories';

class ProductInfo extends Component {

    

    render(){
        return(
            <>
            <h4>Availability</h4>
            <hr/>
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
            <hr/>
                <FormGroup>
                    <Col>
                        <p>Do you have any prepared/packaged, shelf-stable, or refrigerated food product types that apply to your offerings?*</p>
                        <Input type="radio"></Input>
                            <Label>No</Label>
                        <br></br>
                        {/* selecting yes opens dropdown card */}
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
                        {/* selecting yes opens dropdown card */}
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
                        {/* selecting yes opens dropdown card */}
                       <ProductTypeBeverage/>
                        <br></br>
                    </Col>
                </FormGroup>

                <br></br>
                {/* checklist in ProductCategories.js */}
                <ProductCategories/>
                <br></br>
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