import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Button, Form } from 'reactstrap';
import './MakerRegisterForm.css' 
import MakerRegisterTabs from './MakerRegisterTabs/MakerRegisterTabs';


class MakerRegisterForm extends Component {

  save = () => {
    this.props.dispatch({type: 'PUT_MAKER_INFO', payload: this.props.store.maker_registration})
  }


  render() {
    return (
      <div>
        <Form>
          <MakerRegisterTabs/>
          <Button onClick={this.submitBtn}>Submit Application</Button>
          <Button onClick={this.save}>Save Progress</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterForm));
