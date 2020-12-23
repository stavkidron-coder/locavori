import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypeFresh = (props) => {
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
                        <Label check>
                            <Input type="checkbox" value="beef"/>
                            Beef
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="chicken"/>
                            Chicken
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="lamb"/>
                            Lamb
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="bison"/>
                            Bison
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="pork"/>
                            Pork
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="eggs"/>
                            Eggs
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cheese"/>
                            Cheese
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="herbs"/>
                            Herbs
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="apples"/>
                            Apples
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="blueberries"/>
                            Blueberries
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="strawberries"/>
                            Strawberries
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="fresh_vegetables"/>
                            Fresh Vegetables
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="fresh_fruit"/>
                            Fresh Fruit
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="milk"/>
                            Milk
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cream"/>
                            Cream
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="flowers"/>
                            Flowers
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="other"/>
                            Other
                        </Label>
                        <br/>
                    </CardBody>
                    
                </Card>
            </Collapse>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeFresh));