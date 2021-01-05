import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypeFresh = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
      document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
      props.dispatch({type: 'CLEAR_FRESH_TYPE'})
    };

    const handleChange = (event) => {
        if (document.getElementById(event.target.id).checked) {
            props.dispatch({type: 'ADD_FRESH_TYPE', payload: event.target.id});
        } else {
            props.dispatch({type: 'REMOVE_FRESH_TYPE', payload: event.target.id});
        }
      }

  return (
    <div>
      <Input type="radio" name="fresh" onChange={toggle} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Label check>
                            <Input type="checkbox" id="beef" onClick={(event) => handleChange(event)}/>
                            Beef
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="chicken" onClick={(event) => handleChange(event)}/>
                            Chicken
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="lamb" onClick={(event) => handleChange(event)}/>
                            Lamb
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="bison" onClick={(event) => handleChange(event)}/>
                            Bison
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="pork" onClick={(event) => handleChange(event)}/>
                            Pork
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="eggs" onClick={(event) => handleChange(event)}/>
                            Eggs
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cheese" onClick={(event) => handleChange(event)}/>
                            Cheese
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="herbs" onClick={(event) => handleChange(event)}/>
                            Herbs
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="apples" onClick={(event) => handleChange(event)}/>
                            Apples
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="blueberries" onClick={(event) => handleChange(event)}/>
                            Blueberries
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="strawberries" onClick={(event) => handleChange(event)}/>
                            Strawberries
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="fresh_vegetables" onClick={(event) => handleChange(event)}/>
                            Fresh Vegetables
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="fresh_fruit" onClick={(event) => handleChange(event)}/>
                            Fresh Fruit
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="milk" onClick={(event) => handleChange(event)}/>
                            Milk
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cream" onClick={(event) => handleChange(event)}/>
                            Cream
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="flowers" onClick={(event) => handleChange(event)}/>
                            Flowers
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other" onClick={(event) => handleChange(event)}/>
                            Other
                        </Label>
                        <br/>
                    </CardBody>
                    
                </Card>
            </Collapse>
            <br/>
        <Input type="radio" name="fresh" onChange={toggle} >Toggle</Input>
            <Label>No</Label> 
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeFresh));