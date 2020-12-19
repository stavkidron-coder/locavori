import React, { useState } from 'react';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const StateDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return(
    <>
    <Label>State*</Label>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Select
    </DropdownToggle>
    {/* <Input type="text" placeholder="This will be displayed"></Input> */}
      <DropdownMenu className="dropdown-menu">
        <DropdownItem value="AL">Alabama</DropdownItem>
        <DropdownItem value="AK">Alaska</DropdownItem>
        <DropdownItem value="AZ">Arizona</DropdownItem>
        <DropdownItem value="AR">Arkansas</DropdownItem>
        <DropdownItem value="CA">California</DropdownItem>
        <DropdownItem value="CO">Colorado</DropdownItem>
        <DropdownItem value="CT">Connecticut</DropdownItem>
        <DropdownItem value="DE">Delaware</DropdownItem>
        <DropdownItem value="DC">District Of Columbia</DropdownItem>
        <DropdownItem value="FL">Florida</DropdownItem>
        <DropdownItem value="GA">Georgia</DropdownItem>
        <DropdownItem value="HI">Hawaii</DropdownItem>
        <DropdownItem value="ID">Idaho</DropdownItem>
        <DropdownItem value="IL">Illinois</DropdownItem>
        <DropdownItem value="IN">Indiana</DropdownItem>
        <DropdownItem value="IA">Iowa</DropdownItem>
        <DropdownItem value="KS">Kansas</DropdownItem>
        <DropdownItem value="KY">Kentucky</DropdownItem>
        <DropdownItem value="LA">Louisiana</DropdownItem>
        <DropdownItem value="ME">Maine</DropdownItem>
        <DropdownItem value="MD">Maryland</DropdownItem>
        <DropdownItem value="MA">Massachusetts</DropdownItem>
        <DropdownItem value="MI">Michigan</DropdownItem>
        <DropdownItem value="MN">Minnesota</DropdownItem>
        <DropdownItem value="MS">Mississippi</DropdownItem>
        <DropdownItem value="MO">Missouri</DropdownItem>
        <DropdownItem value="MT">Montana</DropdownItem>
        <DropdownItem value="NE">Nebraska</DropdownItem>
        <DropdownItem value="NV">Nevada</DropdownItem>
        <DropdownItem value="NH">New Hampshire</DropdownItem>
        <DropdownItem value="NJ">New Jersey</DropdownItem>
        <DropdownItem value="NM">New Mexico</DropdownItem>
        <DropdownItem value="NY">New York</DropdownItem>
        <DropdownItem value="NC">North Carolina</DropdownItem>
        <DropdownItem value="ND">North Dakota</DropdownItem>
        <DropdownItem value="OH">Ohio</DropdownItem>
        <DropdownItem value="OK">Oklahoma</DropdownItem>
        <DropdownItem value="OR">Oregon</DropdownItem>
        <DropdownItem value="PA">Pennsylvania</DropdownItem>
        <DropdownItem value="RI">Rhode Island</DropdownItem>
        <DropdownItem value="SC">South Carolina</DropdownItem>
        <DropdownItem value="SD">South Dakota</DropdownItem>
        <DropdownItem value="TN">Tennessee</DropdownItem>
        <DropdownItem value="TX">Texas</DropdownItem>
        <DropdownItem value="UT">Utah</DropdownItem>
        <DropdownItem value="VT">Vermont</DropdownItem>
        <DropdownItem value="VA">Virginia</DropdownItem>
        <DropdownItem value="WA">Washington</DropdownItem>
        <DropdownItem value="WV">West Virginia</DropdownItem>
        <DropdownItem value="WI">Wisconsin</DropdownItem>
        <DropdownItem value="WY">Wyoming</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </>
  )

}


  export default withRouter(connect(mapStoreToProps)(StateDropdown));