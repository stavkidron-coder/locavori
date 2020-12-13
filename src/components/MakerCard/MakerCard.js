import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './MakerCard.css';

class MakerCard extends Component {

  render() {
    return (
    <Container>
        <Card>
            <CardBody>

                <CardTitle tag="h5">
                    <Link to="/maker-profile" className="cardTitle">
                        Maker Name
                    </Link>
                    <Button className="favoriteBtn">
                        Favorite
                    </Button>
                </CardTitle>

                <CardSubtitle tag="h6" className="mb-2 text-muted">Maker featured products description</CardSubtitle>
            </CardBody>
            <div className="cardImg"/>
            <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Link to="maker-profile">See more...</Link>
            </CardBody>
        </Card>
    </Container>
    );
  }
}

export default connect(mapStoreToProps)(MakerCard);