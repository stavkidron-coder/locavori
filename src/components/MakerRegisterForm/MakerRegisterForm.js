import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


class MakerRegisterForm extends Component {

    submitBtn = () => {
        this.props.history.push('/home');
    }

  render() {
    return (
      <div>
      
      <Form>
        {/* Business Tab */}
        <h4>Contact Information</h4>
          <FormGroup>
            <Row> 
              <Col>
                <Label>Legal Business Name*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Public Business Name*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Owner's First Name*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                <Label>Owner's Email Address*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Owner's Contact Phone*</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
              <Col>
                <Label>Alternative Phone</Label>
                <Input type="text" placeholder="This will not be public"></Input>
              </Col>
            </Row>
          </FormGroup>

        <br></br>
        <h4>Public Address</h4>
          <FormGroup>
            <Row>
              <Col>
                <Label>Address</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                <Label>Suite #</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>City*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                {/* should this is a dropdown menu? */}
                <Label>State*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
              <Col>
                <Label>Zipcode*</Label>
                <Input type="text" placeholder="This will be displayed"></Input>
              </Col>
            </Row>
          </FormGroup>

        <br></br>
        <h4>Business Specs</h4>
          <FormGroup>
            <Row>
              <Col>
                <Input type="checkbox"></Input><Label>Woman Owned</Label>
                <br></br>
                <Input type="checkbox"></Input><Label>P.O.C. Owned</Label>
              </Col>
              <Col>
                <Label>Website</Label>
                <Input type="text" placeholder="URl"></Input>
              </Col>
              <Col>
                <Label>Facebook</Label>
                <Input type="text" placeholder="URL"></Input>
              </Col>
              <Col>
                <Label>Instagram</Label>
                <Input type="text" placeholder="URL"></Input>
              </Col>
            </Row>
          </FormGroup>
        <br></br>
        {/* Products Tab */}
        <h4>Product Information</h4>
          <FormGroup>
            <h6>What products do you offer?</h6>
            <p>Select all that apply</p>
              <Col>
                <Input type="checkbox"></Input><Label>Food</Label>
                <br></br>
                <Input type="checkbox"></Input><Label>Beverage</Label>
                <br></br>
                <Input type="checkbox"></Input><Label>Other tdb by Katie/Group</Label>
              </Col>
          </FormGroup>

        <br></br>
          <FormGroup>
            <h6>Which categories do your products fit into?</h6>
            <p>Select all that apply</p>
              <Col>
                <Input type="checkbox"></Input><Label>Tbd by Katie</Label>
                <br></br>
                <Input type="checkbox"></Input><Label>Tbd by Katie</Label>
                <br></br>
                <Input type="checkbox"></Input><Label>Tbd by Katie</Label>
              </Col>
          </FormGroup>

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
        {/* my story tab */}
        <h4>My Story</h4>

          <FormGroup>
            <p>Story/Bio for your Maker Profile</p>
            <Input type="text" placeholder=""></Input>

            {/* UX presentation has spaces for other photos and captions here...where will they go if we keep them? */}
          </FormGroup>
        

          <Button onClick={this.submitBtn}>Submit Application</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterForm));
