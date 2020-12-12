import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import SearchBar from '../SearchBar/SearchBar';
import SearchBarCollapse from '../SearchBarCollapse/SearchBarCollapse';
import MapListToggleBtn from './ToggleMapListBtn/ToggleMapListBtn'

import './HomePage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

class HomePage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="homePageBody">
        <Container>
          <Row>
              <SearchBarCollapse/>
          </Row>
          
          <Row>
                <div>
                <select>
                    <option>Filter</option>
                    <option>Drink</option>
                    <option>Fun Times</option>
                    <option>Other Cool things</option>
                    </select>
                </div>
          </Row>

          <Row>
            <MapListToggleBtn/>
          </Row>
              
          </Container>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
