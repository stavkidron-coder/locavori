import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
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
                            <Label check>
                                <Input type="checkbox" value="grocery"/>
                                Local Grocery Stores
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="co_ops"/>
                                Co-ops
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="farmers_market"/>
                                Farmers Market or other Public Market
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="amazon"/>
                                Online on Amazon
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="company_website"/>
                                Other Company Website
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="gift"/>
                                Gift or Subscription Box Companies
                            </Label>
                        </Col>
                   
                        <Col>
                            <Label check>
                                <Input type="checkbox" value="retail"/>
                                Retail Store, non-grocery
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="your_home"/>
                                Your place of business, farm or home
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="roadside"/>
                                Roadside Stand
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="delivery"/>
                                Local Delivery
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="curbside"/>
                                Curbside Pickup
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="shipping"/>
                                Shipping
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="other"/>
                                Other
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p>May customers pick up products?*</p>
                            <Label check>
                                <Input type="checkbox" value="yes"/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="no"/>
                                No
                            </Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you deliver?*</p>
                            <Label check>
                                <Input type="checkbox" value="yes"/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="no"/>
                                No
                            </Label>
                            <br/>
                        </Col>

                        <Col>
                            <p>Do you ship your products?*</p>
                            <Label check>
                                <Input type="checkbox" value="yes"/>
                                Yes
                            </Label>
                            <br/>
                            <Label check>
                                <Input type="checkbox" value="no"/>
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