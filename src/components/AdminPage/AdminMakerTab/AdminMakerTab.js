import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'




class Maker extends Component {
    componentDidMount() {
        this.getMaker();
    }

    getMaker = () => {
        this.props.dispatch({ type: 'GET_MAKERS' })
    }
    ViewProfile = () => {
        this.props.history.push("/maker")
    }
    //deleteMaker = () => {

    // }
    render() {
        return (
            <div className="PendingRequestsBody">
          {this.props.store.maker.map((maker) => {
            return(
              <>
                <Card className="PARCard">
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
                        <Button color="primary" onClick= {this.ViewProfile}>
                          <Link to="#" className="viewProfileLink">View Profile</Link>
                        </Button>
                        <Button color="primary" onClick={this.deleteMaker}>
                          Delete
                        </Button>
                      </Col>


                    </Row>
                  </CardBody>
                </Card>
                </>
            )

          })} 
          
          </div>
        );
    }
}


export default withRouter(connect(mapStoreToProps)(Maker));