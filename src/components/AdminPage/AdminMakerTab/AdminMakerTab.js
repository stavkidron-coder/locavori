import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import './AdminMakerTab.css';
import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'




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
      <div>
        <div className="MakerTabBody">
          {this.props.store.maker.map((maker) => {
            return (
              <>
                {maker.approved_maker ?

                  <Card key={maker.id} className="MakerCard">
                    <CardBody>
                      <CardTitle tag="h5">{maker.business_name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">{maker.product_type_one}</CardSubtitle>
                    </CardBody>

                    <img className="MakerCardImg" width="100%" src={maker.owner_img} alt={maker.business_name} />

                    <CardBody>
                      <CardText>Products:</CardText>
                      <CardText>{maker.product_type_one}, {maker.product_type_two}, {maker.product_type_three}</CardText>
                      <Row>

                        <Col xs="8">
                          <Button color="primary" onClick={() => this.ViewProfile(maker.profile_id)}>
                            <Link to="#" className="viewProfileLink">View Profile</Link>
                          </Button>
                        </Col>

                        <Col xs="4">
                          <Button color="danger" onClick={() => this.deleteMaker(maker.profile_id)}>
                            Delete
                        </Button>
                        </Col>

                      </Row>
                    </CardBody>
                  </Card>

                  :
                  <h2></h2>
                }
              </>
            )
          })}</div>
      </div>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(Maker));