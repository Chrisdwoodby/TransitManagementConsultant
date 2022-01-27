import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../media/Logo.png';
import Image from 'react-bootstrap/Image';

const NavHeader = function(props) {

  const renderServices = function() {
    props.setHome(false);
    props.setServices(true);
    props.setContact(false);
    props.renderAuthentication();
  };

  const renderContact = function() {
    props.setHome(false);
    props.setServices(false);
    props.setContact(true);
    props.renderAuthentication();
  };

  const renderHome = function() {
    props.setHome(true);
    props.setServices(false);
    props.setContact(false);
    props.renderAuthentication();
  };

  const renderAbout = function() {
    props.setHome(false);
    props.SetAbout(true)
    props.setServices(false);
    props.setContact(false);
    props.renderAuthentication();
  }


  return (
    <div>
    <Navbar id="navigation">
      <Nav.Link id="navlink" onClick={renderHome} >
        Home
      </Nav.Link>
      <Nav.Link id="navlink" onClick={renderServices}>
        Services
      </Nav.Link>
      <Navbar.Brand style={{padding: "50px"}}>
        <Image id="company_logo" onClick={renderHome} src={Logo}/>
      </Navbar.Brand>
      <Nav.Link id="navlink" onClick={renderContact} >
        Get in Touch
      </Nav.Link>
      <Nav.Link id="navlink" onClick={renderAbout} >
        Our Story
      </Nav.Link>
    </Navbar>
    </div>
  )
}

export default NavHeader;