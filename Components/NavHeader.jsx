import React, {useState, useEffect} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services.jsx";
import { Link } from 'react-router-dom';
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
    <Navbar id="navigation" expand="md">
      <Navbar.Brand id="logo">
        <Image id="company_logo" onClick={renderHome} src={Logo} width="350px" height="150px"/>
      </Navbar.Brand>
      <Nav.Link id="nav_home" onClick={renderHome}>
        Home
      </Nav.Link>
      <Nav.Link id="nav_services" onClick={renderServices} >
        Services
      </Nav.Link>
      <Nav.Link id="nav_contact" onClick={renderContact}>
        Get in Touch
      </Nav.Link>
      <Nav.Link id="nav_story" onClick={renderAbout}>
        Our Story
      </Nav.Link>
    </Navbar>
  )
}

export default NavHeader;