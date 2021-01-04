import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import './AdminParTab.css';
import AcceptBtn from './AdminPARToolTips/ApproveToolTip';
import DeclineBtn from './AdminPARToolTips/DeclineToolTip';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button, Row, Col } from 'reactstrap';

// ViewApp = () => {

// }
// ApproveApp = () => {

// }
// DenyApp = () => {

// }

class AdminPARTab extends Component {

  render() {
    return (
      <Container>

        <h1>Pending Requests</h1>

        <div className="PendingRequestsBody">
          {this.props.store.maker.map((maker) => {
            return (
              <>
                <Card key={maker.id} className="PARCard">
                  <CardBody>
                    <CardTitle tag="h5">{maker.business_name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{maker.product_type_one}</CardSubtitle>
                  </CardBody>

                  <img className="PendingMakerImg" width="100%" src={maker.owner_img} alt={maker.business_name} />

                  <CardBody>
                    <CardText>Products:</CardText>
                    {/* <CardText>{maker.story}</CardText> */}
                    <CardText>{maker.product_type_one}, {maker.product_type_two}, {maker.product_type_three}</CardText>
                      <Row>
                        <Col xs="6">
                          <Button color="primary">
                            <Link to="#" className="viewProfileLink">View Profile</Link>
                          </Button>
                        </Col>

                        <Col xs="2">
                          <AcceptBtn className="acceptDeclineBtns" />
                        </Col>

                        <Col xs="2">
                          <DeclineBtn className="acceptDeclineBtns" />
                        </Col>
                      </Row>
                  </CardBody>
                </Card>
              </>
            )

          })}

        </div>


      </Container>
    );
  }
}

//owner_img
//business_name
//story


export default withRouter(connect(mapStoreToProps)(AdminPARTab));