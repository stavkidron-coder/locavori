import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const DeliveryOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}>
                Delivery Options {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>

{/* Pickup/Delivery Options */}

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Pickup
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Delivery
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Shipping
                    </Label>
                </FormGroup>
            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(DeliveryOptions);