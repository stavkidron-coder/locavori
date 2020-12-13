import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListView.css';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ListView extends Component {

  render() {
    return (
      <div className="list-body">
        <h1>LIST</h1>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListView);