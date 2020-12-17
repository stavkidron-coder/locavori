import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductInfo extends Component {

    render(){
        return(
            <>
            <h4>Product Information</h4>
                <FormGroup>
                    <h6>What products do you offer?</h6>
                    <p>Select all that apply</p>
                    <Col>
                        <Input type="radio"></Input><Label>Food</Label>
                        <br></br>
                        <Input type="radio"></Input><Label>Beverage</Label>
                        <br></br>
                        <Input type="radio"></Input><Label>Other tdb by Katie/Group</Label>
                    </Col>
                </FormGroup>

                <br></br>
                <FormGroup>
                    <h6>Which categories do your products fit into?</h6>
                    <p>Select all that apply</p>
                    <Col>
                        <Input type="radio"></Input><Label>Tbd by Katie</Label>
                        <br></br>
                        <Input type="radio"></Input><Label>Tbd by Katie</Label>
                        <br></br>
                        <Input type="radio"></Input><Label>Tbd by Katie</Label>
                    </Col>
                </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductInfo));