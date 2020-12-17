import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavbarCollapse.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import LogOutButton from '../LogOutButton/LogOutButton';

const NavbarCollapse = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = <LogOutButton/>;
  }

  return (
    <div>
      <Navbar className="navBar" light>
        <NavbarBrand href="/" className="mr-auto">Locavori</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 navToggle" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="nav-item">
              <Link className="nav-link" to='/home' onClick={toggleNavbar}>Home</Link>
            </NavItem>

            <NavItem>
              {/* Will need to send over user ID to the profile page link which will determine whether or not they are a maker */}
              {props.store.user.id && (
                <>
                  <Link className="nav-link" to='/profile' onClick={toggleNavbar}>Account</Link>
                </>
              )} 
            </NavItem>
            
            <NavItem>
              <Link className="nav-link" to={loginLinkData.path} onClick={toggleNavbar}>{loginLinkData.text}</Link>
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

export default connect(mapStoreToProps)(NavbarCollapse);