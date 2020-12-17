import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapView.css';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import FilterDropdown from '../../FilterDropdown/FilterDropdown';
import LocalMap from '../../MapAPI/Map.js';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MapView extends Component {

  render() {
    return (
      <div className="map-body">
        <div className="filter">
          <FilterDropdown/>
        </div>
        <LocalMap />
        {/* <h1 className="mapContainer">MAP</h1> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MapView);