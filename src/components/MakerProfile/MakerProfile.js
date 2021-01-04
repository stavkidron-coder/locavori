import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardText, Container, Button, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DesktopNav from '../Navbars/DesktopNav';




class MakerProfilePage extends React.Component {



  componentDidMount() {
    this.getMaker();


  }
  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKER_CARD',payload:this.props.match.params })
  }


  render() {
    return (
      <>
      <DesktopNav/>
      <Container>
        {this.props.store.makerCard.map((maker) => {
           return (
        <>
          <Card className="MakerProfileCard" key={maker.id}>
            <CardBody >
              <Row>
                <Col>
                  <img className="logo" src={maker.business_img} width='350' alt="" />
                </Col>
                <Col>
                  <CardHeader tag="h2">{maker.business_name}</CardHeader>
                  <CardText>{maker.business_city},{maker.business_state}</CardText>
                  <CardText>{maker.phone_one}</CardText>
                  <CardText>{maker.email_contact}</CardText>
                  <Button>{maker.website}</Button>
                  {/* facebook, instagram, and "like" icons go here */}
                </Col>
              </Row>

              <Row className="MeetTheMaker">
                <Col>
                  <CardSubtitle tag="h4" >Meet {maker.first_name} from {maker.business_name}</CardSubtitle>
                  <CardText>{maker.story}</CardText>
                </Col>
                
                <Col>
                <img className="logo" src={maker.owner_img} width='350' alt="" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <img className="featuredProduct1" src={maker.product_img_one} width='250' alt="" />
                </Col>
                <Col>
                  <img className="featuredProduct2" src={maker.product_img_two} width='250' alt="" />
                </Col>
                <Col>
                  <img className="featuredProduct3" src={maker.product_img_three} width='250' alt="" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
        )
        })}

      </Container>

        </>
    )
  }
}
export default connect(mapStoreToProps)(MakerProfilePage);
