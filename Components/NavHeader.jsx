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
    <Navbar id="navigation" expand="lg">
      <Nav.Link onClick={renderHome} style={{color: "white", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", paddingLeft: "250px"}}>
        Home
      </Nav.Link>
      <Nav.Link onClick={renderServices} style={{color: "white", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", paddingLeft: "200px", paddingRight: "50px"}}>
        Services
      </Nav.Link>
      <Navbar.Brand style={{padding: "50px"}}>
        <Image onClick={renderHome} src={Logo} width="350px" height="150px"/>
      </Navbar.Brand>
      <Nav.Link onClick={renderContact} style={{color: "white", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", paddingRight: "200px"}}>
        Get in Touch
      </Nav.Link>
      <Nav.Link onClick={renderAbout} style={{color: "white", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>
        Our Story
      </Nav.Link>
    </Navbar>
  )
}

export default NavHeader;