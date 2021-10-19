import React, {useState, useEffect} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import bus from '../media/bus.png';
import cityscape from '../media/cityscape.png';
import homeIMG2 from '../media/homeIMG2.png';
import homeIMG1 from '../media/homeIMG1.png';
import homeIMG3 from '../media/homeIMG3.png';

const HomePage = function() {
  return (
    <div>
      <Carousel id="image_carousel" fade>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src={homeIMG2}
            alt="First slide"
            height="900"
            width="2000"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src={homeIMG1}
            alt="Second slide"
            height="900"
            width="2000"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src={homeIMG3}
            alt="Third slide"
            height="900"
            width="2000"
          />
        </Carousel.Item>
      </Carousel>
      <Container style={{paddingTop: "100px", paddingBottom: "150px"}}>
        <Row>
          <Col id="tailoredNeeds" style={{backgroundColor: "#66fcf1", borderRadius: "15px",
           paddingLeft: "20px", fontFamily: "sans-serif", letterSpacing: "2px"}}>
            <h2 style={{fontFamily: "sans-serif", textTransform:
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