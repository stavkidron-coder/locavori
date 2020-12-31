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
      <Input type="checkbox" onClick={toggle} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Label check>
                            <Input type="checkbox" value="schrubs_switchel"/>
                            Schrubs or Switchel
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="soda"/>
                            Soda Pop (rootbeer, sassparilla, etc)
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="coffee"/>
                            Coffee
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="hot_drink"/>
                            Hot Cocoa or Hot Drink Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="tea"/>
                            Tea
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="health_shot"/>
                            Health or Energy Shot
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="sweet_treat"/>
                            Sweet Treat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cocktail_mixer"/>
                            Cocktail or bar mixer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="spirits"/>
                            Spirits
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="beer"/>
                            Beer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cider"/>
                            Hard Cider
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="wine"/>
                            Wine
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="fresh_fruit"/>
                            Fresh Fruit
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="nonalcoholic"/>
                            Non-Alcoholic Beverage 
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="dairy"/>
                            Dairy
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

export default withRouter(connect(mapStoreToProps)(ProductTypeBeverage));