import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const AvailabilityOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_FILTER', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_FILTER', payload: event.target.id});
    }
  }

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}>
                Availability {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>

            <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="limited" onClick={(event) => handleChange(event)}/>{' '}
                            Limited Availability
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="always" />{' '}
                            Available All Year
                    </Label>
                </FormGroup>

            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(AvailabilityOptions);