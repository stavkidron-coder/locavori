import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import './AdminParTab.css';
import AcceptBtn from './AdminPARToolTips/ApproveToolTip';
import DeclineBtn from './AdminPARToolTips/DeclineToolTip';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button, Row, Col } from 'reactstrap';



class AdminPARTab extends Component {
  
  componentDidMount() {
    this.getMaker();
  }

  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKERS' })
  }
  ViewProfile = (makerId) => {
    this.props.history.push(`/makerCard/${makerId}`);
    // console.log("11111111111111111111", makerId);
  }
  approveMaker = (makerId) => {
    this.props.dispatch({ type: "APPROVE_MAKER", payload: makerId })
  }
  denyMaker = (makerId) => {
    this.props.dispatch({ type: "DENY_MAKER", payload: makerId })
  }

  render() {
    return (
      <>

      <h1>Pending Requests</h1>

     

          <div className="PendingRequestsBody">
             <Container>
               <Row>
            {this.props.store.maker.map((maker) => {
              return (
                <>
                  {maker.pending_maker ?
                    <Col xs="12" md="6" xl="4">
                      <Card key={maker.id} className="PARCard">

                        <CardBody>
                          <CardTitle tag="h5">{maker.business_name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">{maker.product_type_one}</CardSubtitle>
                        </CardBody>

                        <img className="PendingMakerImg" width="100%" src={maker.owner_img} alt={maker.business_name} />

                        <CardBody>
                          <Row>
                            <Col xs="12">
                              <CardText>Products:</CardText>
                              <CardText>{maker.product_type_one} <br/> {maker.product_type_two}<br/>{maker.product_type_three}</CardText>
                            </Col>
                          </Row>
                          <br/>
                          <Row>
                            <Col xs="3">
                                  <AcceptBtn className="acceptDeclineBtns" makerId= {maker.profile_id} />
                            </Col>

                            <Col xs="3">
                                <DeclineBtn className="acceptDeclineBtns" makerId= {maker.profile_id}/>
                            </Col>

                            <Col xs="6">
                                <Button className="viewProfileBtn" onClick={() => this.ViewProfile(maker.profile_id)}> 
                                View Page
                                </Button>
                            </Col>
                            
                            
                          </Row>
                        </CardBody>

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

export default withRouter(connect(mapStoreToProps)(AdminPARTab));