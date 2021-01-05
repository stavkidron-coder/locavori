import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, FormGroup, Label, Input } from 'reactstrap';
import ProductTypePrepared from './ProductTypePrepared/ProductTypePrepared';
import ProductTypeFresh from './ProductTypeFresh/ProductTypeFresh';
import ProductTypeBeverage from './ProductTypeBeverage/ProductTypeBeverage';
import ProductCategories from '../../../../MakerRegisterForm/MakerRegisterProductsTab/ProductInfo/ProductCategories/ProductCategories';

class ProductInfo extends Component {
    
    handleRadio = (event) => {
        this.props.dispatch({type: 'AVAILABILITY', payload: event.target.id});
    }

    handleChange = (event, eventType) => {
        this.props.dispatch({type: 'PRODUCT_INFO', payload: {key: eventType, value: event.target.value}});
      }

    render(){
        return(
            <>
            <h4>Availability</h4>
            <hr/>
                <FormGroup>
                    <Col>
                        <p>Is your product available year round or limited availability?*</p>
                        <Label check>
                            <Input type="radio" name="availability" id="always" onChange={(event) => this.handleRadio(event)}/>
                            Available All Year
                        </Label>
                        <br></br>
                        <Label check>
                            <Input type="radio" name="availability" id="limited" onChange={(event) => this.handleRadio(event)}/>
                            Limited Availability
                        </Label>
                        <br></br>
                    </Col>
                </FormGroup>

            
            <h4>Product Types</h4>
            <hr/>
                <FormGroup>
                    <Col>
                        <p>Do you have any prepared/packaged, shelf-stable, or refrigerated food product types that apply to your offerings?*</p>
                        {/* selecting yes opens dropdown card */}
                        <ProductTypePrepared/>
                        <br></br>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <p>Do you have any fresh food product types that you grow/raise?*</p>
                        {/* selecting yes opens dropdown card */}
                        <ProductTypeFresh/>
                        <br></br>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <p>Do you have any beverage product types that apply to your offerings?*</p>
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
                            <Input type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'specialties')}></Input>

                    <h6>List any related awards you have won or been a finalist for:</h6>
                        <p>Separate each item with a comma</p>
                            <Input type="text" placeholder="For example: MN State Fair grand champion" onChange={(event) => this.handleChange(event, 'awards')}></Input>

                    <h6>What makes your products unique?</h6>
                        <p>We love to hear this!</p>
                            <Input type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'unique')}></Input>
                </FormGroup>

            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductInfo));