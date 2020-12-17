import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';


class ProductFeatured extends Component{

    render(){
        return(
            <>
            <br></br>
                <h4>Featured Products</h4>
                <FormGroup>
                    <Row>
                        <Col>
                            <p>Product 1</p>
                            <Input type="text" placeholder="Product Image URL"></Input>
                        </Col>
                        <Col>
                            <p>Product 2</p>
                            <Input type="text" placeholder="Product Image URL"></Input>
                        </Col>
                        <Col>
                            <p>Product 3</p>
                            <Input type="text" placeholder="Product Image URL"></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="Product Type (from Product Type list above)"></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" placeholder="Product URL"></Input>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="Product URL"></Input>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="Product URL"></Input>
                        </Col>
                    </Row>
                </FormGroup>
                <br></br>
        </>
        )
    }
}




export default withRouter(connect(mapStoreToProps)(ProductFeatured));