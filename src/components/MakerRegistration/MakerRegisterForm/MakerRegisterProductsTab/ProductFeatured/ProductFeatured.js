import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';


class ProductFeatured extends Component{

    render(){
        return(
            <>

                <h4>Featured Products</h4>
                <hr/>

                <FormGroup>

                    <Row>
                        <Col>
                            <Label>Product 1 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type "></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL"></Input>
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label>Product 2 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type "></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL"></Input>
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label>Product 3 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type "></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL"></Input>
                            </Label>
                        </Col>
                    </Row>

                </FormGroup>

            </>
        )
    }
}




export default withRouter(connect(mapStoreToProps)(ProductFeatured));