import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SearchBar extends Component {

  render() {
    return (
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="findInput">Find:</Label>
            <Input type="select" name="select" id="findInput">
                <option>Everything</option>
                <option>All Food</option>
                <option>All Drink</option>
                <option>Bread</option>
                <option>Something Else</option>
            </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="locationInput" className="mr-sm-2">Near:</Label>
          <Input type="text" name="location" id="locationInput" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(SearchBar);