import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductCategories extends Component {


    handleChange = (event) => {
        console.log(event.target.value);
    }

    render(){
        return(
            <>
            <FormGroup>
                    <h6>Which categories do your products fit into?</h6>
                    <p>Select all that apply</p>

                    <Row>
                        <Col>
                            
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="snack" type="checkbox"/>
                                Snack
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="sweet_treat" type="checkbox"/>
                                Sweet Treat
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="savory_treat" type="checkbox"/>
                                Savory Treat
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="healthy" type="checkbox"/>
                                Healthy
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="gluten_free" type="checkbox"/>
                                Gluten Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="vegan" type="checkbox"/>
                                Vegan
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="dairy_free" type="checkbox"/>
                                Dairy Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="organic" type="checkbox"/>
                                Organic
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="local" type="checkbox"/>
                                Majority of your product is locally grown (grown within your state or neighboring state)
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="fair_trade" type="checkbox"/>
                                Fair Trade Sourced
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="farmer_made" type="checkbox"/>
                                Farmer/Grower made
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="small_batch" type="checkbox"/>
                                Small Batch
                            </Label>
                        </Col>

                        <Col>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="handmade" type="checkbox"/>
                                Handmade
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="non_gmo" type="checkbox"/>
                                Non GMO
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="no_trans_fats" type="checkbox"/>
                                No Trans Fats
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="no_corn_syrup" type="checkbox"/>
                                No High Fructose Corn Syrup
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="nitrate_free" type="checkbox"/>
                                Nitrate Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="award_winning" type="checkbox"/>
                                Award Winning
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="keto" type="checkbox"/>
                                Keto/Low Carb
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="nut_free" type="checkbox"/>
                                Nut Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="kosher" type="checkbox"/>
                                Kosher
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="low_sodium" type="checkbox"/>
                                Low Sodium
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="gift" type="checkbox"/>
                                Gift
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} value="other" type="checkbox"/>
                                Other
                            </Label>
                        </Col>
                    </Row>
                </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductCategories));