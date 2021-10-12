import React, {useState, useEffect} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services.jsx";
import { Link } from 'react-router-dom';

const NavHeader = function() {
  return (
    <Navbar bg="dark" expand="lg">
      <Nav.Link>
        Home
      </Nav.Link>
    </Navbar>
  )
}

export default NavHeader;