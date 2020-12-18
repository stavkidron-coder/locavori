import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input, Container } from 'reactstrap';


class ProductFeatured extends Component{

    render(){
        return(
            <>

                <h4>Featured Products</h4>

                <hr/>

                <FormGroup>

                    <Row>
                        <Col>
                            <Label>Product 1
                                <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>

                            <Label>Product Type
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                            </Label>

                            <Label>Product URL
                                <Input type="text" placeholder="Product URL"></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product 2
                            <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>

                            <Label>Product Type
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                            </Label>

                            <Label>Product URL
                                <Input type="text" placeholder="Product URL"></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product 3
                            <Input type="text" placeholder="Product Image URL"></Input>
                            </Label>

                            <Label>Product Type
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                            </Label>

                            <Label>Product URL
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