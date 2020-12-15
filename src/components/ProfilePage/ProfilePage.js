import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MakerProfile from '../MakerProfile/MakerProfile';
import UserProfile from '../UserPage/UserPage';

class ProfilePage extends React.Component {



  makerLink = () => {
    // this.props.history.push()
  }
  render() {
    return (

      
        <>
        <MakerProfile/>
        <UserProfile/>
        </>

    )
  }
}

export default connect(mapStoreToProps)(ProfilePage);

