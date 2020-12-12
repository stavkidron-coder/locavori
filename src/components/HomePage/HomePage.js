import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './HomePage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="grid-col grid-col_8">
            <label>Find</label>
            <select>
              <option>Food</option>
              <option>Drink</option>
              <option>Fun Times</option>
              <option>Other Cool things</option>
              </select>
              <label>Near</label>
              <input></input>
          </div>           
        </div>
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

        </div>
      
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
