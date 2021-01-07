import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const ProductOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Product Types {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Meat
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Cheese
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Eggs
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Beverages
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Snacks
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Sweets
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Condiments, Herbs, & Spreadables
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Plant/Flowers
                    </Label>
                </FormGroup>

            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(ProductOptions);