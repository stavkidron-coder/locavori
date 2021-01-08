import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const LocationOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Location Options {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Local Grocery Stores
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Co-ops
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Farmers Markets/Other Local Markets
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Online on Amazon
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Online on Company Website
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Gift/Subscription Box
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Retail Store (Non-Grocery)
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Private Place of Business, Farm, or Home
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Roadside Stand
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Other
                    </Label>
                </FormGroup>

            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(LocationOptions);