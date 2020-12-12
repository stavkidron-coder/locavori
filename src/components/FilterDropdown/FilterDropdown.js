import React, { useState } from 'react';
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
            <Form>
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Option 1
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Option 2
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Option 3
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Option 4
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