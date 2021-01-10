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
      profile_pic: "https://cdn.pixabay.com/photo/2016/05/26/19/37/chips-potatoes-1418192_1280.jpg",
      story: "Founded in the heart of Alaska, Emma's Chip Co brings the tastes of the last frontier to the lower 48.  We still make our chips the pioneer way: fried in a gold pan or baked in the midnight sun! Our chips are small batch and made with local ingredients. You can enjoy classic rustic Alaskan flavors such as Sourdough & Onion, Wild Blueberry, Balto BBQ, and Bering Sea Salt & Vinegar. Pair them with our King Salmon Dip or our Grizzly Bear Beans for a hearty snack!",
      give_back: "We donate 500 cases of chips to local schools each month",
      anything_else: "We offer a 10% student and teacher discount with the code PRIME"
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