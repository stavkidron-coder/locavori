import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';

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
        <Card>
          {this.props.store.maker.map((maker) => {
            return <>
              <Card key={maker.id}>
                <Card className="masterCard">
                  <img src={maker.owner_img} width='100px' />
                </Card>
                <Card>
                  <CardTitle>{maker.business_name}</CardTitle>
                </Card>
                <Card>
                  <CardText>{maker.story}</CardText>
                </Card>
                <Card className='requestBtn'>
                  <Button className='btn' onClick={this.ViewApp}>View Application</Button>
                  <Button className='btn' onClick={this.ApproveApp}>Approve</Button>
                  <Button className='btn' onClick={this.DenyApp}>Deny</Button>
                </Card>
              </Card>
            </>
          })}
        </Card>
      </Container>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(AdminPARTab));