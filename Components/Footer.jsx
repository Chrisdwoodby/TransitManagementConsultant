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
        <Row id="footer_logo">
          <Col><Image id="company_logo" src={background}/></Col>
        </Row>
        <p id="company_website_link" style={{color: "white", opacity: "0.5", textAlign: "center", paddingBottom: "100px"}}>2021 transitmaintenanceconsultants.com</p>
      </Container>
    </div>
  )
}

export default Footer;