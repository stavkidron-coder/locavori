import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ListView extends Component {

  render() {
    return (
      <div>
        <h1>LIST</h1>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListView);