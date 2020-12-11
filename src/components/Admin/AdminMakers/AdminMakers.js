import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminMakersPage extends Component {

    parPage = () => {
        this.props.history.push('/admin-PAR')
    }

  render() {
    return (
      <div>
        <h1>Admin Makers Page</h1>
        <Button onClick={this.parPage} color="primary">PAR</Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(AdminMakersPage));