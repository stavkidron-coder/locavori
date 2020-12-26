import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypeBeverage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
      document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
      props.dispatch({type: 'CLEAR_BEVERAGE_TYPE'})
  };

  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_BEVERAGE_TYPE', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_BEVERAGE_TYPE', payload: event.target.id});
    }
  }

//   NEED YES AND NO??
  return (
    <div>
      <Input type="checkbox" onClick={toggle} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Label check>
                            <Input type="checkbox" id="schrubs_switchel" onChange={(event) => handleChange(event)}/>
                            Schrubs or Switchel
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="soda" onChange={(event) => handleChange(event)}/>
                            Soda Pop (rootbeer, sassparilla, etc)
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="coffee" onChange={(event) => handleChange(event)}/>
                            Coffee
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="hot_drink" onChange={(event) => handleChange(event)}/>
                            Hot Cocoa or Hot Drink Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="tea" onChange={(event) => handleChange(event)}/>
                            Tea
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="health_shot" onChange={(event) => handleChange(event)}/>
                            Health or Energy Shot
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="sweet_treat" onChange={(event) => handleChange(event)}/>
                            Sweet Treat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cocktail_mixer" onChange={(event) => handleChange(event)}/>
                            Cocktail or bar mixer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="spirits" onChange={(event) => handleChange(event)}/>
                            Spirits
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="beer" onChange={(event) => handleChange(event)}/>
                            Beer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cider" onChange={(event) => handleChange(event)}/>
                            Hard Cider
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="wine" onChange={(event) => handleChange(event)}/>
                            Wine
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="fresh_fruit" onChange={(event) => handleChange(event)}/>
                            Fresh Fruit
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="nonalcoholic" onChange={(event) => handleChange(event)}/>
                            Non-Alcoholic Beverage 
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="dairy" onChange={(event) => handleChange(event)}/>
                            Dairy
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other" onChange={(event) => handleChange(event)}/>
                            Other
                        </Label>
                        <br/>
                    </CardBody>
                    
                </Card>
            </Collapse>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeBeverage));