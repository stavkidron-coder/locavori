import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Filters extends Component {

  render() {
    return (
        <div>
            <h2>Filters</h2>
            <hr/>

            <Form>

{/* Pickup/Delivery Options */}

                <h4>Delivery Options</h4>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Pickup
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Delivery
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Curb-Side Pickup
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Shipping
                    </Label>
                </FormGroup>

                <hr/>

{/* Maker Type */}

                <h4>Maker Type</h4>

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

                <hr/>

{/* Locations */}
                
                <h4>Locations</h4>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Local Grocery Stores
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Co-ops
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Farmers Markets/Other Local Markets
                    </Label>
                </FormGroup>

                <hr/>

{/* Product Type */}

                <h4>Product Type</h4>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Condiments
                    </Label>
                </FormGroup>

                <hr/>

{/* Dietary Restrictions */}

                <h4>Dietary Restrictions</h4>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Vegan
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Gluten Free
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Nut Free
                    </Label>
                </FormGroup>

                <hr/>
{/* Other Filters */}

                <h4>Other</h4>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Women Owned
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            P.O.C. Owned
                    </Label>
                </FormGroup>

            </Form>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(Filters);
