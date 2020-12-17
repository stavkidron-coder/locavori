import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import ProductDistro from './ProductDistro/ProductDistro';
import ProductInfo from './ProductInfo/ProductInfo';


class MakerRegisterProductsTab extends Component {

  render() {
    return (
        <>
        <ProductDistro/>
        <ProductInfo/>
        
        

        <br></br>
        <h4>Types of Products</h4>
          <FormGroup>
            <Row>
              <Col>
                <Input type="text" placeholder="Product Image URL"></Input>
              </Col>
              <Col>
                <Input type="text" placeholder="Product Image URL"></Input>
              </Col>
              <Col>
                <Input type="text" placeholder="Product Image URL"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input type="text" placeholder="Product Type"></Input>
              </Col>
              <Col>
                <Input type="text" placeholder="Product Type"></Input>
              </Col>
              <Col>
                <Input type="text" placeholder="Product Type"></Input>
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
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterProductsTab));