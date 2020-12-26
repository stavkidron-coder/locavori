import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductDistro extends Component {

    handleChange = (event) => {
        if (document.getElementById(event.target.id).checked) {
            this.props.dispatch({type: 'ADD_PRODUCT_DISTRIBUTION', payload: event.target.id});
        } else {
            this.props.dispatch({type: 'REMOVE_PRODUCT_DISTRIBUTION', payload: event.target.id});
        }
    }

    handleRadio = (event) => {
        console.log(event.target);
    }


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
                            <Label check>
                                <Input type="checkbox" id="grocery" onClick={(event) => this.handleChange(event)}/>
                                Local Grocery Stores
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="co_ops" onClick={(event) => this.handleChange(event)}/>
                                Co-ops
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="farmers_market" onClick={(event) => this.handleChange(event)}/>
                                Farmers Market or other Public Market
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="amazon" onClick={(event) => this.handleChange(event)}/>
                                Online on Amazon
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="company_website" onClick={(event) => this.handleChange(event)}/>
                                Other Company Website
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="gift" onClick={(event) => this.handleChange(event)}/>
                                Gift or Subscription Box Companies
                            </Label>
                        </Col>
                   
                        <Col>
                            <Label check>
                                <Input type="checkbox" id="retail" onClick={(event) => this.handleChange(event)}/>
                                Retail Store, non-grocery
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="your_home" onClick={(event) => this.handleChange(event)}/>
                                Your place of business, farm or home
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="roadside" onClick={(event) => this.handleChange(event)}/>
                                Roadside Stand
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="delivery" onClick={(event) => this.handleChange(event)}/>
                                Local Delivery
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="curbside" onClick={(event) => this.handleChange(event)}/>
                                Curbside Pickup
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="shipping" onClick={(event) => this.handleChange(event)}/>
                                Shipping
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" id="other" onClick={(event) => this.handleChange(event)}/>
                                Other
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {/* KEEP AS RADIO? OR MORE CHECKBOXES? */}
                            <p>May customers pick up products?*</p>
                            <Label check>
                                <Input type="radio" name="pick_up" id="yes" onClick={(event) => this.handleRadio(event)}/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="radio" name="pick_up" id="no" onClick={(event) => this.handleRadio(event)}/>
                                No
                            </Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you deliver?*</p>
                            <Label check>
                                <Input type="radio" name="delivery" id="yes" onClick={(event) => this.handleRadio(event)}/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="radio" name="delivery" id="no" onClick={(event) => this.handleRadio(event)}/>
                                No
                            </Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you ship your products?*</p>
                            <Label check>
                                <Input type="radio" name="shipping" id="yes" onClick={(event) => this.handleRadio(event)}/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="radio" name="shipping" id="no" onClick={(event) => this.handleRadio(event)}/>
                                No
                            </Label>
                            <br/>
                        </Col>
                    </Row>
            </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductDistro));