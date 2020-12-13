import React, { useState } from 'react';
import './FilterDropdown.css';
import { Collapse, Button, CardBody, Card, Input, Label, Form, FormGroup } from 'reactstrap';

const CollapseSearch = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="map-list-body">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Filter</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Form className="filterCardForm">
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Pick-Up
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                          Delivery
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Shipped to You
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Nut-Free
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Gluten-Free
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Vegan
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Women Owned
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            P.O.C. Owned
                    </Label>
                </FormGroup>

            </Form>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseSearch;