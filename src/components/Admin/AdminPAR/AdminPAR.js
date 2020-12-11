import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminPARPage extends Component {

    makersBtn = () => {
        this.props.history.push('/admin-makers')
    }

  render() {
    return (
      <div>
        <h1>Admin PAR Page</h1>
        <Button color="primary" onClick={this.makersBtn}>Makers</Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(AdminPARPage));