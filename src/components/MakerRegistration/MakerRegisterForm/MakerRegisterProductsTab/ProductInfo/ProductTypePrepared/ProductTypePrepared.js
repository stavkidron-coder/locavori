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
      <Input type="checkbox" onClick={toggle} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Label check>
                            <Input type="checkbox" value="jams"/>
                            Jams, Jellies, Spreadables
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="pickles"/>
                            Pickles, Relish
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="vinegars"/>
                            Vinegars
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cookies"/>
                            Cookies
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="crackers"/>
                            Crackers
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="chips"/>
                            Chips
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="syrups"/>
                            Syrups
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="honey"/>
                            Honey
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="pancake_mix"/>
                            Pancake Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="baking_mix"/>
                            Baking Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="cooking_sauce"/>
                            Cooking Sauce
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="hot_sauce"/>
                            Hot Sauces
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="salsa"/>
                            Salsa
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="hard_candy"/>
                            Hard Candy/Sweets
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="popcorn"/>
                            Popcorn
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="chocolate"/>
                            Chocolate
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="soft_candy"/>
                            Soft or Chewy Candy/Sweets
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="nuts"/>
                            Nuts
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="other_snacks"/>
                            Other Snacks
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="dried_food"/>
                            Dried Food
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="granola"/>
                            Granola
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="soups"/>
                            Soups (fresh or mix)
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="catsup"/>
                            Catsup
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="mustard"/>
                            Mustard
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="sweet_treat"/>
                            Sweet Treat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="rub"/>
                            Rub
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="marinade"/>
                            Marinade
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="dried_vegetable"/>
                            Dried Vegetable
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="other_sauce"/>
                            Other Sauce
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="dried_meat"/>
                            Dried Meat or Jerky
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="preserved_meat"/>
                            Preserved, shelf-stable meat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" value="bakery"/>
                            Bakery: fresh bread/pastries
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

export default withRouter(connect(mapStoreToProps)(ProductTypePrepared));