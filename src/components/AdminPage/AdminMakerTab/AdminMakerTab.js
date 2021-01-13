import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import './AdminMakerTab.css';
import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText, Row, Col, Container, CardFooter, CardHeader } from 'reactstrap';


class Maker extends Component {
  
  componentDidMount() {
    this.getMaker();
  }

  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKERS' })

  }
  ViewProfile = (makerId) => {
    this.props.history.push(`/makerCard/${makerId}`)

  }
  deleteMaker = (makerId) => {
    this.props.dispatch({ type: "DELETE_MAKER", payload: makerId })
  }
  render() {
    return (
      <>

        <h1>Approved Makers</h1>

        <div className="MakerTabBody">
          <Container>
            <Row>
          {this.props.store.maker.map((maker) => {
            return (
              <>
                {maker.approved_maker ?

                <Col xs="12" md="6" xl="4">
                  <Card key={maker.id} className="adminCards">

                    <CardHeader className="cardHeader">
                      <CardTitle tag="h5">{maker.business_name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2">{maker.product_type_one}</CardSubtitle>
                    </CardHeader>

                    <img className="adminMakerImg" src={maker.owner_img} alt={maker.business_name} />
                    

                    <CardBody>
                      <Col xs="12">
                        <CardText>
                          <h5>Products:</h5>
                          <hr/>
                          {maker.product_type_one}
                          <br/>
                          {maker.product_type_two}
                          <br/>
                          {maker.product_type_three}
                        </CardText>
                      </Col>
                      </CardBody>
                      
                      <CardFooter className="cardFooter">
                        <Row>
                        <Col xs="8">
                          <Button className="viewProfileBtn" onClick={() => this.ViewProfile(maker.profile_id)}>
                              View Profile
                          </Button>
                        </Col>

                        <Col xs="4">
                          <Button className="declineBtn" onClick={() => this.deleteMaker(maker.profile_id)}>
                            Delete
                        </Button>
                        </Col>
                        </Row>
                      </CardFooter>
                    
                  </Card>
                </Col>
                  :
                  null
                  
                }
                
              </>
            )
          })}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(Maker));