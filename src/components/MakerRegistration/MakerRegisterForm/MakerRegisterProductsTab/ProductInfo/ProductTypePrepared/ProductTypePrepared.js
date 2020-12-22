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
                        <p>select all that apply</p>
                        <Input type="radio"></Input>
                            <Label>Jams, Jellies, Spreadables</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Pickles, Relish</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Vinegars</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Cookies</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Crackers</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Chips</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Syrups</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Honey</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Pancake Mix</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Baking Mix</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Cooking Sauce</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Hot Sauces</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Salsa</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Hard Candy/Sweets</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Popcorn</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Chocolate</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Soft or Chewy Candy/Sweets</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Nuts</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Other Snacks</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Dried Food</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Granola</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Soups (fresh or mix)</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Catsup</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Mustard</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Sweet Treat</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Rub</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Marinade</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Dried Vegetable</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Other Sauce</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Dried Meat or Jerky</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Preserved, shelf-stable meat</Label>
                        <br/>
                        <Input type="radio"></Input>
                            <Label>Bakery: fresh bread/pastries</Label>
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

export default withRouter(connect(mapStoreToProps)(ProductTypePrepared));