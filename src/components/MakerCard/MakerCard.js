import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './MakerCard.css';

class MakerCard extends Component {

  render() {
    return (
    <>
        {this.props.store.maker.map(maker => {
            return <Container>
                        <Card>
                            <CardBody>

                                <CardTitle tag="h5">
                                    <Link to="/maker-profile" className="cardTitle">
                                        {maker.business_name}
                                    </Link>
                                    <Button className="favoriteBtn">
                                        Favorite
                                    </Button>
                                </CardTitle>

                                <CardSubtitle tag="h6" className="mb-2 text-muted">{maker.product_type_one}</CardSubtitle>
                            </CardBody>
                            <div className="cardImg"/>
                            <CardBody>
                                <CardText>{maker.story}</CardText>
                                <Link to="maker-profile">See more...</Link>
                            </CardBody>
                        </Card>
                    </Container>
        })}
        
    </>
    );
  }
}

export default connect(mapStoreToProps)(MakerCard);