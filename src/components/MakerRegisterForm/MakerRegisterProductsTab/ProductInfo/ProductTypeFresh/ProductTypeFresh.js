import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
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
                        <Input type="radio"></Input>
                            <Label>Beef</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Chicken</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Lamb</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Bison</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Pork</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Eggs</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Cheese</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Herbs</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Apples</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Blueberries</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Strawberries</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Fresh Vegetables</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Fresh Fruit</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Milk</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Cream</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Flowers</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Other</Label>
                        <br></br>
                    </CardBody>
                </Card>
            </Collapse>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeFresh));