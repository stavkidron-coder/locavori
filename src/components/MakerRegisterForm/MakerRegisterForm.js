import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Button, Form } from 'reactstrap';
import MakerRegisterTabs from './MakerRegisterTabs/MakerRegisterTabs';


class MakerRegisterForm extends Component {


 



  render() {
    return (
      <div>
      
        <Form>
          <MakerRegisterTabs/>
          

          <Button onClick={this.submitBtn}>Submit Application</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterForm));
