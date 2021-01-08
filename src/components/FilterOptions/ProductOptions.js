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
                            Meats
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Dairy & Eggs
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Alcoholic Beverages
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Non-Alcoholic Beverages
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Snacks & Sweets
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
                            Fruits & Vegetables
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Plants & Flowers
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

export default connect(mapStoreToProps)(ProductOptions);