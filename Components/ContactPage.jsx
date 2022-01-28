import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactPage = function() {
  return (
    <Container style={{paddingBottom: "200px"}}>
      <h2 style={{fontFamily: "sans-serif", letterSpacing: "2px", color: "white", textAlign: "center", paddingBottom: "100px"}}>Ask us how we can help</h2>
      <Row>
        <Col id="text-bubble">
          <h3>Contact via Email</h3>
          <p>transitmanagmentconsulting@gmail.com</p>
          <h3>Give us a Call</h3>
          <p>512-626-7681</p>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactPage;