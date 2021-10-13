import React, {useState, useEffect} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bus from '../media/bus.png';

const HomePage = function() {
  return (
    <div>
      <Container style={{paddingTop: "100px", paddingBottom: "200px"}}>
        <Row>
          <Col style={{color: "white"}}>
            <h3 style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px",
             paddingLeft: "200px", paddingTop: "50px", paddingRight: "20px"}}>Why TMC?
            </h3>
            <Row style={{padding: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
              Maintaining transit bus equipment is a unique experience.  Buses are custom
              made for each transit property, which results in unique repair and maintenance
              experience and requirements.
            </Row>
            <Row>
              <ul style={{fontFamily: "sans-serif", letterSpacing: "2px", paddingLeft:
               "100px", paddingRight: "100px"}}>
                <li>Proven solutions for maintenance problems</li>
                <li>Equipment Specific Preventive maintenance Programs</li>
                <li>Shop Audits</li>
                <li>Equipment Reviews and Audits</li>
                <li>Contract Preformance Reviews</li>
              </ul>
            </Row>
          </Col>
          <Col xs={1}></Col>
          <Col style={{color: "white"}}>
            <h3 style={{fontFamily: "sans-serif", textTransform: "uppercase",
            letterSpacing: "2px", paddingLeft: "100px", paddingTop: "50px"}}>Our Reputation
            </h3>
            <Row style={{padding: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
              Transit Maintenance Consulting is a group of highly experienced professionals
              who have led large vehicle maintenance organizations through all phases of bus
              acquisitions, and maintenance Programs.
            </Row>
            <Row style={{padding: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
              Our team has written documents for formal bid submission, such as quality
              manuals and start-up plans.
            </Row>
            <Row style={{padding: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
              TMC can perform performance reviews confidentially, or provide public, board
               level reports.
            </Row>
          </Col>
        </Row>
      </Container>
      <Container style={{paddingTop: "100px", paddingBottom: "150px"}}>
        <Row>
          <Col id="tailoredNeeds" style={{backgroundColor: "#2b7a78", borderRadius: "15px", color: "white",
           paddingLeft: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
            <h2 style={{color: "white", fontFamily: "sans-serif", textTransform:
            "uppercase", letterSpacing: "2px", padding: "50px"}}>Tailored to your needs
            </h2>
            Getting new buses and need specifications, or factory line inspections?
            Contracting services, need to have a third party evaluate how your contractors
             are doing? These are special services, involving some knowledge of FTA rules
             and regulations. Our experienced team is ready to show you how this can be
             done.  We can walk you through the process.
          </Col>
          <Col>
            <Image src={bus} height="500" width="500"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;