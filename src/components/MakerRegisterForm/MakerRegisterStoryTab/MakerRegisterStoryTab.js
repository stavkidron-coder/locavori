import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, FormGroup, Label, Input } from 'reactstrap';



class MakerRegisterStoryTab extends Component {

  render() {
    return (
        <>
            {/* my story tab */}
                <h4>My Story</h4>
                    <FormGroup>
                      <Col>
                          <Label>Maker Profile Picture</Label>
                          <Input type="text" placeholder="Profile Image URL"></Input>
                      </Col>
                      <Col>
                        <Label>Story/Bio for your Maker Profile</Label>
                            <Input type="text" placeholder=""></Input>
                      </Col>
                      <Col>
                        <Label>Do you have a "give-back component to your business? (i.e. support a cause or nonprofit, etc)</Label>
                          <Input type="text" placeholder=""></Input>
                      </Col>
                      <Col>
                        <Label>Is there anything else you would like us to know?</Label>
                          <Input type="text" placeholder=""></Input>
                      </Col>
                    </FormGroup>
        </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterStoryTab));