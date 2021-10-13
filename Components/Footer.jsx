import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import background from "../media/background.png";

const Footer = function() {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col></Col>
          <Col><Image src={background}/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;