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
                  <img width="100%" src={maker.owner_img} alt={maker.business_name} />
                  <CardBody>
                    <CardText>STORY:</CardText>
                    <CardText>{maker.story}</CardText>
                    <Row>
                      <Col xs="8">
                        <Button color="primary">
                          <Link to="#" className="viewProfileLink">View Profile</Link>
                        </Button>

                      </Col>
                      <AcceptBtn className="acceptDeclineBtns" />
                      <DeclineBtn className="acceptDeclineBtns" />

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