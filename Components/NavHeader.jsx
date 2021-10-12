import React, {useState, useEffect} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services.jsx";
import { Link } from 'react-router-dom';

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
  }


  return (
    <Navbar bg="dark" expand="lg">
      <Nav.Link onClick={renderHome}>
        Home
      </Nav.Link>
      <Nav.Link onClick={renderServices}>
        Services
      </Nav.Link>
      <Nav.Link onClick={renderContact}>
        Get in Touch
      </Nav.Link>
    </Navbar>
  )
}

export default NavHeader;