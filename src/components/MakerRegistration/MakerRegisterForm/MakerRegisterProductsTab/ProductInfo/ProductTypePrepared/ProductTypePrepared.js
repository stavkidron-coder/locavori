import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypePrepared = (props) => {
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
                            <Label>Jams, Jellies, Spreadables</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Pickles, Relish</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Vinegars</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Cookies</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Crackers</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Chips</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Syrups</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Honey</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Pancake Mix</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Baking Mix</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Cooking Sauce</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Hot Sauces</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Salsa</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Hard Candy/Sweets</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Popcorn</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Chocolate</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Soft or Chewy Candy/Sweets</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Nuts</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Other Snacks</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Dried Food</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Granola</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Soups (fresh or mix)</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Catsup</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Mustard</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Sweet Treat</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Rub</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Marinade</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Dried Vegetable</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Other Sauce</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Dried Meat or Jerky</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Preserved, shelf-stable meat</Label>
                        <br></br>
                        <Input type="radio"></Input>
                            <Label>Bakery: fresh bread/pastries</Label>
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

export default withRouter(connect(mapStoreToProps)(ProductTypePrepared));