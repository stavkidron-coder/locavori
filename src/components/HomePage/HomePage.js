import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchBarCollapse from '../SearchBarCollapse/SearchBarCollapse';
// import Filters from '../FilterOptions/Filters';

// FILTERS
import MakerOptions from '../FilterOptions/MakerOptions';
import DeliveryOptions from '../FilterOptions/DeliveryOptions';
import LocationOptions from '../FilterOptions/LocationOptions';
import ProductOptions from '../FilterOptions/ProductOptions';
import AvailabilityOptions from '../FilterOptions/AvailabilityOptions';

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

        <div className="filterMapBody">
          <Row>
            <Col xs="3">
              <h2>Filters</h2>
              <hr/>
              {/* <Filters/> */}
              <AvailabilityOptions/>
              <DeliveryOptions/>
              <MakerOptions/>
              <LocationOptions/>
              <ProductOptions/>
            </Col>

            <Col xs='9'>
             <MapListToggleBtn/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
