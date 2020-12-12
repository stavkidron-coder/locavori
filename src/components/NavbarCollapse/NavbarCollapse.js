import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavbarCollapse = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Locavori</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="nav-item">
              <Link className="nav-link" to='/home' onClick={toggleNavbar} >Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/profile' onClick={toggleNavbar}>Profile</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/login' onClick={toggleNavbar}>Log In/Log Out</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/maker-registration' onClick={toggleNavbar}>Apply to be a Maker</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCollapse;