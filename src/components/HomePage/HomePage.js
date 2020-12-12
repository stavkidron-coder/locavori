import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import SearchBar from '../SearchBar/SearchBar';
import SearchBarCollapse from '../SearchBarCollapse/SearchBarCollapse';
import MapView from './MapView/MapView';

import './HomePage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

class HomePage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <Container>

          {/* <SearchBar/> */}
          <SearchBarCollapse/>


            <div>
            <select>
                <option>Filter</option>
                <option>Drink</option>
                <option>Fun Times</option>
                <option>Other Cool things</option>
                </select>
              <button>Map</button>
              <button>List</button>
            </div>

          </Container>

          <MapView/>

        </div>
      
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
