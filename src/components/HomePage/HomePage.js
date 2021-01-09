import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// FILTERS
import MakerOptions from '../Filter/FilterOptions/MakerOptions';
import DeliveryOptions from '../Filter/FilterOptions/DeliveryOptions';
import LocationOptions from '../Filter/FilterOptions/LocationOptions';
import ProductOptions from '../Filter/FilterOptions/ProductOptions';
import AvailabilityOptions from '../Filter/FilterOptions/AvailabilityOptions';
import DietaryRestrictions from '../Filter/FilterOptions/DietaryRestrictions';
// MAP & LIST
import Map from './MapView/MapView';
import List from './ListView/ListView';
// NAVBAR
import HomeNav from '../Navbars/HomeNav';
// CSS
import './HomePage.css';
import '../Filter/Filters.css';
// BOOTSTRAP
import { Col, Row, Button } from 'reactstrap';


class HomePage extends Component {

  state = {
    filters: {
      business_type: ['Cosmetics', 'Baked Good'],
      delivery: [],
      product_type: [],
    }
  }

  // onLogin = (event) => {
  //   this.props.history.push('/login');
  // };

  componentDidMount = () => {
    this.props.dispatch({type: 'GET_MAKERS'});
  };

  filterGet = () => {
    this.props.dispatch({type: 'FILTER_MAKERS', payload: this.props.store.filters});
  };

  render() {
    return (
      <div className="homePageBody">

        <HomeNav/>

        <div className="filterMapBody">
          <Row>
            <Col xs="12" lg="4" xl="3" className="filterContainer">
              <h2>Filters</h2>
              <hr/>
              {/* <Filters/> */}
              <AvailabilityOptions/>
              <DeliveryOptions/>
              <MakerOptions/>
              <LocationOptions/>
              <ProductOptions/>
              <DietaryRestrictions/>
              <Button className="filterGoBtn" onClick={this.filterGet}>Search</Button>
            </Col>

            <Col xs="12" lg="8" xl="9">
              <h2>Find Local Makers</h2>
              <hr/>
              <Map/>
              <br/>
              <h2>Local Makers Near You</h2>
              <hr/>
              <List/>
            </Col>

          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
