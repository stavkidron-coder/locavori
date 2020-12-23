import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductCategories extends Component {

    render(){
        return(
            <>
            <FormGroup>
                    <h6>Which categories do your products fit into?</h6>
                    <p>Select all that apply</p>

                    <Row>
                        <Col>
                            
                            <Label>
                                <Input name="snack" type="radio"/> {' '}
                                Snack
                            </Label>
                            <br/>
                            <Input name="sweet_treat" type="radio"></Input>
                                <Label>Sweet Treat</Label>
                            <br/>
                            <Input name="savory_treat" type="radio"></Input>
                                <Label>Salty/Savory Treat</Label>
                            <br/>
                            <Input name="healthy" type="radio"></Input>
                                <Label>Healthy</Label>
                            <br/>
                            <Input name="gluten_free" type="radio"></Input>
                                <Label>Gluten Free</Label>
                            <br/>
                            <Input name="vegan" type="radio"></Input>
                                <Label>Vegan</Label>
                            <br/>
                            <Input name="dairy_free" type="radio"></Input>
                                <Label>Dairy Free</Label>
                            <br/>
                            <Input name="organic" type="radio"></Input>
                                <Label>Organic</Label>
                            <br/>
                            <Input name="local" type="radio"></Input>
                                <Label>Majority of your product is locally grown (grown within your state or neighboring state)</Label>
                            <br/>
                            <Input type="radio"></Input>
                                <Label>Fair Trade Sourced</Label>
                            <br/>
                            <Input name="farmer_made" type="radio"></Input>
                                <Label>Farmer/Grower made</Label>
                            <br/>
                            <Input name="small_batch" type="radio"></Input>
                                <Label>Small Batch</Label>
                        </Col>

                        <Col>
                            <br/>
                            <Input name="handmade" type="radio"></Input>
                                <Label>Handmade</Label>
                            <br/>
                            <Input name="non_gmo" type="radio"></Input>
                                <Label>Non GMO</Label>
                            <br/>
                            <Input name="no_trans_fats" type="radio"></Input>
                                <Label>No Trans Fats</Label>
                            <br/>
                            <Input name="no_corn_syrup" type="radio"></Input>
                                <Label>No High Fructose Corn Syrup</Label>
                            <br/>
                            <Input name="nitrate_free" type="radio"></Input>
                                <Label>Nitrate Free</Label>
                            <br/>
                            <Input name="award_winning" type="radio"></Input>
                                <Label>Award Winning</Label>
                            <br/>
                            <Input name="keto" type="radio"></Input>
                                <Label>Keto/Low Carb</Label>
                            <br/>
                            <Input name="nut_free" type="radio"></Input>
                                <Label>Nut Free</Label>
                            <br/>
                            <Input name="kosher" type="radio"></Input>
                                <Label>Kosher</Label>
                            <br/>
                            <Input name="low_sodium" type="radio"></Input>
                                <Label>Low Sodium</Label>
                            <br/>
                            <Input name="gift" type="radio"></Input>
                                <Label>Gift</Label>
                            <br/>
                            <Input name="other" type="radio"></Input>
                                <Label>Other</Label>
                        </Col>
                    </Row>
                </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductCategories));