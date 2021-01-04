import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, Container, Row, Col, Button } from 'reactstrap';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './MakerCard.css';
import FavoriteBtn from '../../FavoriteBtn/FavoriteBtn';
import { withRouter } from "react-router";


class MakerCard extends Component {

    ViewProfile = (makerId) => {
        this.props.history.push(`/makerCard/${makerId}`)
        console.log("11111111111111111111",makerId);
        
    }
    render() {
        return (
            <Container>
                <Card className="makerCard">
                    {/* Title, product types, favorite Btn */}
                    <CardHeader>
                        <Row>
                            <Col xs="10">
                                <CardTitle tag="h5">
                                    <Button size="lg" color="link" onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                        {this.props.maker.business_name}
                                    </Button>
                                   


                                </CardTitle>

                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    {this.props.maker.product_type_one}, {this.props.maker.product_type_two}, {this.props.maker.product_type_three}
                                </CardSubtitle>
                            </Col>

                            <Col xs="2">
                                <FavoriteBtn className="favoriteBtn" />
                            </Col>
                        </Row>
                    </CardHeader>

                    {/* Image, story, see more link */}
                    <Row>
                        <CardBody>
                            <Col xs="3">
                                <img
                                    src={this.props.maker.owner_img}
                                    alt={this.props.maker.story}
                                    className="cardImg"
                                />
                            </Col>
                            <Col xs="9">
                                <CardText>{this.props.maker.story}</CardText>
                                <Button  color="link" onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                        See more...
                                </Button>
                            </Col>

                        </CardBody>
                    </Row>

                </Card>
            </Container>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(MakerCard));