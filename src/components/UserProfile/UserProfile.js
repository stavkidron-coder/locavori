import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button, Jumbotron, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DesktopNav from '../Navbars/DesktopNav';
import './UserProfile.css';


class UserProfilePage extends React.Component {

  render() {
    return (
      <>
      <DesktopNav/>
      <div className="profileBody">
        {/* {JSON.stringify(this.props.store.user)} */}
        
        <Jumbotron>
          <Container>
            <h1>Hello, {this.props.store.user.first_name}</h1>
            <h6>({this.props.store.user.email})</h6>
          </Container>
        </Jumbotron>

        <Container>

        <h2>My Favorites</h2>
        <hr/>
        
        <div className="favoritesContainer">
          {/* Loop through favorites table  here*/}
        </div>

      </Container>
    </div>
    </>
    )
  }
}

export default connect(mapStoreToProps)(UserProfilePage);

