import React, { useState } from 'react';
import './SearchBarCollapse.css';
import { Collapse, Button, CardBody, Card, Input, Label, Form, FormGroup } from 'reactstrap';

const CollapseSearch = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="map-list-body">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Search</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Form>

                <FormGroup>
                    <Label for="findInput">Find:</Label>
                    <Input type="select" name="select" id="findInput">
                        <option>Everything</option>
                        <option>All Food</option>
                        <option>All Drink</option>
                        <option>Bread</option>
                        <option>Something Else</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label for="locationInput" className="mr-sm-2">Near:</Label>
                    <Input type="text" name="location" id="locationInput"/>
                </FormGroup>

                <Button color="primary" onClick={toggle}>Submit</Button>

            </Form>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseSearch;