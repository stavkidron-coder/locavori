import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';


class MakerProfilePage extends React.Component {

  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='150' />
            <Card body>
        <CardTitle tag="h5">Name</CardTitle>
        <CardText>City, State</CardText>
        <CardText>Phone #</CardText>
        <CardText>Email</CardText>
        <Button>Website</Button>

        
      </Card>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Meet Maker_MakerName</CardSubtitle>
          </CardBody>

          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">About Maker</CardSubtitle>
            <CardBody>I make Bread,Wine, and cheese. I have enjoyed doing this for over 35 years. The best part for me is to share with my community.</CardBody>
          </CardBody>
        </Card>
        <Card className="Bread">
            <CardBody>
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' />
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' />
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' />
            </CardBody>
            <Button>See My Products</Button>
        </Card>
      </Container>

    )
  }
}

export default connect(mapStoreToProps)(MakerProfilePage);

