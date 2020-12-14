import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ProfilePage extends React.Component {



  makerLink = () => {
    // this.props.history.push()
  }
  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} width='200' />

            <CardSubtitle tag="h6" className="mb-2 text-muted">Profile Name</CardSubtitle>
          </CardBody>

          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Favorites</CardSubtitle>
            {/* Where we will loop to find favorites per User */}
            <Button className="favoriteBtn">
              Favorite
            </Button>
          </CardBody>
        </Card>
      </Container>

    )
  }
}

export default connect(mapStoreToProps)(ProfilePage);

