import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = function(props) {
  return (
    <Container style={{color: "white"}}>
      <Row>Over 40 years managing fleets in the public and private sector operating over 500 buses.  Have authored bus and van vehicle specifications for over 1300 buses.  Fuel options include diesel, CNG, propane, hybrid and electric.

      Experience with many successful FTA Triennial Reviews without issues.

      Much successful experience with turning around troubled maintenance organizations into models for others.   Experience conducting peer reviews for public and private operators. Have served as the project manager for new maintenance facilities.  Have designed and authored Preventive Maintenance Programs for private and public fleets.

      Designed and implemented training programs for bus mechanics, and facility / building maintenance technicians. Have had oversite responsibility for privatize sector maintenance organizations in multiple states.

      Our organization knows how a good fleet maintenance plan is made and looks like.  While no two properties are the same, the program contains what is important to the bus.  The vehicles’ needs the care and attention to keep it in its original condition, less allowable wear and tear.  It must be kept safe, reliable, and clean.  Let us assist you in building the organization to realize this.  We would be glad to discuss any situation you may have.

       </Row>
    </Container>
  )
}

export default About;