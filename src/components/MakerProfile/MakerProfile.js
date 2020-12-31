import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';



class MakerProfilePage extends React.Component {



  componentDidMount() {
    this.getMaker();


  }
  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKER_CARD',payload:this.props.match.params })
  }


  render() {
    return (
      <Container>
        {this.props.store.makerCard.map((maker) => {
           return (
        <>
          <Card key= {maker.id}>
            <CardBody>
              <img className="logo" src={maker.business_img} width='150' alt="" />

              <CardTitle tag="h5">{maker.business_name}</CardTitle>
              <CardText>{maker.business_city},{maker.business_state}</CardText>
              <CardText>{maker.phone_one}</CardText>
              <CardText>{maker.email_contact}</CardText>
              <Button>{maker.website}</Button>
              
              <CardSubtitle tag="h6" >Meet "{maker.business_name}"</CardSubtitle>
            </CardBody>
          </Card>
        </>
        )
        })}

      </Container>

    )
  }
}
export default connect(mapStoreToProps)(MakerProfilePage);
//   this.props.store.makerCard.map((maker) => {
//     return

//   })}
{/* <Card className="Bread">
          <CardBody>
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' alt="" />
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' alt="" />
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/Bread-and-Wine.jpg`} width='75' alt="" />
          </CardBody>
          <Button>See My Products</Button>
        </Card> */}