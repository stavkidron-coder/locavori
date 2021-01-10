import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, FormGroup, Label, Input, Container, Row } from 'reactstrap';



class MakerRegisterStoryTab extends Component {

  state = {
    profile_pic: "",
    story: "",
    give_back: "",
    anything_else: ""
  }

  handleChange = (event, eventType) => {
    this.props.dispatch({type: 'STORY', payload: {key: eventType, value: event.target.value}});
  }

  secretBtn = () => {
    this.setState({
      profile_pic: "Profile pic test",
      story: "Story test",
      give_back: "Give-back test",
      anything_else: "Anything else test"
    });
  }

  render() {
    return (
        <div className="storyBody">
          <Container>

            {/* my story tab */}
            <h2 onClick={this.secretBtn}>My Story</h2>

            <FormGroup>
              <Row>
                <Col>
                  <Label>Maker Profile Picture
                    <Input type="text" placeholder="Profile Image URL" defaultValue={this.state.profile_pic} onChange={(event) => this.handleChange(event, 'profile_image')}></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col xs="4">
                  <Label htmlFor="storyInput">Story/Bio for your Maker Profile</Label>
                  <Input type="textarea" placeholder="Tell us your story..." id="storyInput" defaultValue={this.state.story} onChange={(event) => this.handleChange(event, 'story')}></Input>
                    
                </Col>

                <Col xs="4">
                  <Label htmlFor="giveBackInput">give-back components</Label>
                  <Input type="textarea" id="giveBackInput" defaultValue={this.state.give_back} placeholder="Do you have a give-back component to your business? (i.e. support a cause or nonprofit, etc)" onChange={(event) => this.handleChange(event, 'give_back')}></Input>              
                </Col>

                <Col xs="4">
                  <Label htmlFor="anythingElseInput">Anything else?</Label>
                    <Input type="textarea" defaultValue={this.state.anything_else} placeholder="Is there anything else you would like us to know?" id="anythingElseInput" onChange={(event) => this.handleChange(event, 'anything_else')}></Input>
                </Col>
              </Row>       
            </FormGroup>
          </Container>
        </div>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterStoryTab));