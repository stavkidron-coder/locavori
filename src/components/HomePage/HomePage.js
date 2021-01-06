import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchBarCollapse from '../SearchBarCollapse/SearchBarCollapse';
import MapListToggleBtn from './ToggleMapListBtn/ToggleMapListBtn'
import HomeNav from '../Navbars/HomeNav';


import './HomePage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

class HomePage extends Component {

  state = {
    filters: {
      business_type: ['Cosmetics', 'Baked Good'],
      delivery: [],
      product_type: [],
    }
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  componentDidMount = () => {
    this.props.dispatch({type: 'GET_MAKERS'});
  };

  filterGet = () => {
    this.props.dispatch({type: 'FILTER_MAKERS', payload: this.state.filters});
  };

  render() {
    return (
      <div className="homePageBody">
        {/* <button onClick={this.filterGet}>TEST GET</button> */}

        <HomeNav/>

        <Container>

          <Row>
            <Col xs='12'>
             <MapListToggleBtn/>
            </Col>
          </Row>
              
        </Container>

        </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
