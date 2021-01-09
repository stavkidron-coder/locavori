import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Container, Button, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DesktopNav from '../../Navbars/DesktopNav';
import './MakerProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebookSquare}/>
const instagram = <FontAwesomeIcon icon={faInstagramSquare}/>




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
        {maker.approved_maker ?
          <Card  key={maker.id}>
            <CardBody className="MakerProfileCard">
              <Row >
                <Col xs="6">
                  <img className="logo" src={maker.logo} width='350' alt="" />
                </Col>
                <Col>
                  <CardHeader className="MakerProfileHeader" tag="h2">{maker.business_name}</CardHeader>
              
                  <CardText className="MakerContact">{maker.business_city},{maker.business_state}
                  </CardText>
                  <CardText className="MakerContact">{maker.phone_one}</CardText>
                  <CardText className="MakerContact">{maker.email_contact}</CardText>
 
             
                  {/* facebook, instagram, and "like" icons go here */}
                 
                    <Button className="WebsiteLink" href={maker.website}>visit website</Button>

                    <a href={maker.facebook}>
                      <p className="SocialIcon">{facebook}</p>
                    </a>
            
                    <a href={maker.facebook}>
                      <p className="SocialIcon">{instagram}</p>
                    </a>
                  
                
                </Col>
              </Row>

              <Row className="MeetTheMaker">
                <Col xs="8">
                  <CardSubtitle className="MakerTitle" tag="h4" >Meet {maker.first_name} from {maker.business_name}</CardSubtitle>
                  <CardText>{maker.story}</CardText>

                  <CardSubtitle>Known for:</CardSubtitle>
                  <CardText>{maker.product_unique}</CardText>

                  <CardSubtitle>Awards:</CardSubtitle>
                  <CardText>{maker.awards}</CardText>
                </Col>
                
                <Col xs="4">
                <img className="MakerImage" src={maker.owner_img} width='250' alt="" />
                </Col>
              </Row>

              <Row className="FeaturedProducts">
                <Col xs="4">
                  <a className="ProductTitle" href={maker.product_url_one}>
                    <CardSubtitle  href={maker.product_url_one}>{maker.product_type_one}</CardSubtitle>
                  </a> 

                  <a href={maker.product_url_one}>
                    <img  className="FeaturedProductImg" src={maker.product_img_one} width='250' alt="" align="center"/>
                  </a>
                </Col>

                <Col xs="4">
                  <a className="ProductTitle" href={maker.product_url_two}>
                    <CardSubtitle >{maker.product_type_two}</CardSubtitle>
                  </a>

                  <a href={maker.product_url_two}>
                    <img  className="FeaturedProductImg" src={maker.product_img_two} width='250' alt="" align="center"/>
                  </a>
                </Col>

                <Col xs="4">
                  <a className="ProductTitle" href={maker.product_url_three}>
                    <CardSubtitle >{maker.product_type_three}</CardSubtitle>
                  </a>

                  <a href={maker.product_url_three}>
                    <img  className="FeaturedProductImg" src={maker.product_img_three} width='250' alt="" align="center"/>
                  </a>
                </Col>
              </Row>
            </CardBody>
          </Card>
          :
          <p/>
          }
        </>
        )
        })}

      </Container>

        </>
    )
  }
}
export default connect(mapStoreToProps)(MakerProfilePage);
