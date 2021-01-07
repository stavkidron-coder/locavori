import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, Container, Row, Col, Button } from 'reactstrap';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './MakerCard.css';
import FavoriteBtn from '../../FavoriteBtn/FavoriteBtn';
import { withRouter } from "react-router";

class MakerCard extends Component {

    ViewProfile = (makerId) => {
        this.props.history.push(`/makerCard/${makerId}`)
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'TEST_FAVORITES', payload: this.props.maker.id});
      }

    
    render() {
        return (
            <Container>
        
                {/* {JSON.stringify(this.props.store.testFavorites)} */}

                <Card className="makerCard">
                    {/* Title, product types, favorite Btn */}
                    <CardHeader className="ListViewHeader">
                        <Row>
                            <Col xs="10">
                                <CardTitle tag="h5">
                                    <Button className="ListViewButton" size="lg"  onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                        {this.props.maker.business_name}
                                    </Button>
                                </CardTitle>

                            </Col>

                            <Col xs="2">
                                {!this.props.store.testFavorites ?
                                    <Button>REMOVE FAVORITE</Button>
                                    :
                                    <FavoriteBtn className="favoriteBtn" makerId={this.props.maker.id}/>
                                }
                            </Col>
                        </Row>
                    </CardHeader>

                    {/* Image, story, see more link */}

                        <CardBody>
                            <Row>
                            <Col xs="3">
                                <img
                                    src={this.props.maker.product_img_one}
                                    alt={this.props.maker.story}
                                    className="cardImg"
                                />
                            </Col>

                            <Col xs="6">
                                <CardText tag="h6" className="ListViewSubtitle">
                                        {this.props.maker.product_type_one}
                                    <br/>
                                        {this.props.maker.product_type_two}
                                    <br/>
                                        {this.props.maker.product_type_three}
                                </CardText>

                                <Button className="SeeMoreButton" onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                        See more...
                                </Button>
                            </Col>
                            </Row>
                        </CardBody>

                </Card>
            </Container>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(MakerCard));