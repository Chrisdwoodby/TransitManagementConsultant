import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = function() {
  return (
    <Container style={{paddingBottom: "200px"}}>
      <Col id="text-bubble" xs={3} >
        <h3>The Story of</h3>
        <h1 style={{fontSize: "90px", fontWeight: "bold", fontFamily: "sans-serif"}}>TMC</h1>
      </Col>
      <article id="about_the_company" style={{color: "white", paddingTop: "100px"}}>With over 40 years of managing fleets in the public and private sector operating over 500 buses TMC is honored and well suited for all of your needs. We have conducted peer reviews for public and private operators and authored bus and van vehicle specifications for over 1300 buses with nearly every fuel options including diesel, CNG, propane, hybrid and electric.
      Having served as a project manager for new maintenance facilities and designed and authored Preventive Maintenance Programs for private and public fleets, we have experienced many successful FTA Triennial Reviews as well as experience with turning around troubled maintenance organizations into models for others.
      Experienced in the Design and implementation of training programs for bus mechanics, and facility / building maintenance technicians, and maintain oversite responsibility for privatize sector maintenance organizations in multiple states.
      Our organization knows how a good fleet maintenance plan is made and looks like. While no two properties are the same, the program contains what is important to the bus. The vehicles’ needs the care and attention to keep it in its original condition, less allowable wear and tear. It must be kept safe, reliable, and clean. Let us assist you in building the organization to realize this. We would be glad to discuss any situation you may have.
       </article>
    </Container>
  )
}

export default About;
