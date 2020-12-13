import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListView.css';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import FilterDropdown from '../../FilterDropdown/FilterDropdown';

class ListView extends Component {

  render() {
    return (
      <div className="list-body">
        <div className="filter">
          <FilterDropdown/>
        </div>
        
        <h1 className="listContainer">LIST</h1>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListView);