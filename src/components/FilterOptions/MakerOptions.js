import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const MakerOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Maker Types {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Farmer/Grower
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Forager
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Maker
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Distiller
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Brewer
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Wine Maker
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Cidery
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Roaster
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Apiary (Bees)
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Woman Owned
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            P.O.C. Owned
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

export default connect(mapStoreToProps)(MakerOptions);