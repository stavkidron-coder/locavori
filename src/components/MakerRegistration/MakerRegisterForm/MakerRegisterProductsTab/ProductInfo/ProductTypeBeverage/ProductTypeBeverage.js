import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypeBeverage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Input type="radio" onClick={toggle} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Input type="radio"></Input>
                            <Label>Schrubs or Switchel</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Soda Pop (rootbeer, sassparilla, etc)</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Coffee</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Hot Cocoa or Hot Drink Mix</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Tea</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Health or Energy Shot</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Sweet Treat</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Cocktail or bar mixer</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Spirits</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Beer</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Hard Cider</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Wine</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Fresh Fruit</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Non-Alcoholic Beverage</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Dairy</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Other</Label>
                        <br/>
                    </CardBody>
                    
                </Card>
            </Collapse>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeBeverage));