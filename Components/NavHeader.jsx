import React from "react";
import Nav from 'react-bootstrap/Nav';
import Logo from '../media/Logo.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Col } from "react-bootstrap";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavHeader = function(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderServices = function() {
    props.setHome(false);
    props.setServices(true);
    props.setContact(false);
    props.renderAuthentication();
    setShow(false);
  };

  const renderContact = function() {
    props.setHome(false);
    props.setServices(false);
    props.setContact(true);
    props.renderAuthentication();
    setShow(false);
  };

  const renderHome = function() {
    props.setHome(true);
    props.setServices(false);
    props.setContact(false);
    props.renderAuthentication();
    setShow(false);
  };

  const renderAbout = function() {
    props.setHome(false);
    props.SetAbout(true)
    props.setServices(false);
    props.setContact(false);
    props.renderAuthentication();
    setShow(false);
  }


  return (
    <div id="navigation">
      <Container className="nav-header">
      <Col className="header-col-left">
        <Image id="nav_logo" onClick={renderHome} src={Logo}/>
      </Col>
      <Col className="nav-link-container">
        <Nav.Link id="navlink" onClick={renderHome} >
          Home
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderServices}>
          Services
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderContact} >
          contact
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderAbout} >
          Our Story
        </Nav.Link>
      </Col>

      <a className="mobile-menu" onClick={handleShow}>
      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Have a Look Around</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-nav-link-container">
        <Nav.Link id="navlink" onClick={renderHome} >
          Home
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderServices}>
          Services
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderContact} >
          contact
        </Nav.Link>
        <Nav.Link id="navlink" onClick={renderAbout} >
          Our Story
        </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
    </div>
  )
}

export default NavHeader;