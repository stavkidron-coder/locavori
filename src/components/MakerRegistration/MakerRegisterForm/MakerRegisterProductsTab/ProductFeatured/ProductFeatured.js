import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';


class ProductFeatured extends Component{

    handleChange = (event, eventType) => {
        this.props.dispatch({type: 'ADD_FEATURED_PRODUCTS', payload: {key: eventType, value: event.target.value}});
      }

    render(){
        return(
            <>

                <h4>Featured Products</h4>
                <hr/>

                <FormGroup>

                    <Row>
                        <Col>
                            <Label>Product 1 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_one_image')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_one_type')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_one_url')}></Input>
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label>Product 2 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_two_image')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_two_type')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_two_url')}></Input>
                            </Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label>Product 3 (link to an image of your product)
                                <Input type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_three_image')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product Type (from Product Type list above)
                                <Input type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_three_type')}></Input>
                            </Label>
                        </Col>

                        <Col>
                            <Label>Product URL (link to your product on your website)
                                <Input type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_three_url')}></Input>
                            </Label>
                        </Col>
                    </Row>

                </FormGroup>

            </>
        )
    }
}




export default withRouter(connect(mapStoreToProps)(ProductFeatured));