import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './NavbarCollapse.css';
import logo from '../../TestImages/Locavori-Logo-horizontal.png';
import LogOutButton from '../LogOutButton/LogOutButton';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col
} from 'reactstrap';

const DesktopNav = (props) => {

    let loginLinkData = {
        path: '/login',
        text: 'LOGIN / REGISTER',
      };
    
      if (props.store.user.id != null) {
        loginLinkData.path = '/home';
        loginLinkData.text = <LogOutButton/>;
      }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar className="topNav" light expand="md">
            <Nav className="ml-auto navContents" navbar>
                <NavItem className="nav-item">
                    <Link className="nav-link loginOut" to={loginLinkData.path} onClick={toggle}>{loginLinkData.text}</Link>
                </NavItem>
            </Nav>
        </Navbar>

      <Navbar className="navBar" dark expand="md">
        <NavbarBrand href="/"><img src={logo} alt="logo" className="navLogo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="ml-auto" navbar>

            <NavItem className="nav-item navContents">
                <Link className="nav-link" to='/home' onClick={toggle}>HOME</Link>
            </NavItem>
              
            <NavItem>
                {/* Will need to send over user ID to the profile page link which will determine whether or not they are a maker */}
                {props.store.user.id && (
                    <Link className="nav-link navContents" to='/profile' onClick={toggle}>ACCOUNT</Link>
                )} 
            </NavItem>

            <NavItem>
                <Link className="nav-link navContents" to='/maker-registration' onClick={toggle}>APPLY TO BE A MAKER</Link>
            </NavItem>

          </Nav>
            

        </Collapse>
      </Navbar>
            
    </div>
  );
}

export default connect(mapStoreToProps)(DesktopNav);