import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bus from '../media/bus.png';
import { ElfsightWidget } from 'react-elfsight-widget';

const HomePage = function() {

  const renderServices = function() {
    props.setHome(false);
    props.setServices(true);
    props.setContact(false);
    props.renderAuthentication();
    setShow(false);
  };

  return (
    <div>
      <div className="home-banner-container">
            <Col className="home-banner-left">
              <div>
                <h1>Your Expert Transit </h1>
              </div>
            <ElfsightWidget className="form" widgetID="259f6071-ed60-4703-ba5c-5af5562e96a6" />
            </Col>
            <Col className="home-banner-right">
              <div className="cta-box box-1">
                <h2>Proven solutions for unique maintenance problems</h2>
                <span>equipment specific preventive maintenance programs, Detailed Shop
                   audits, Equipment reviews, and audits Contract performance reviews</span>
                <a className="banner-cta-btn">Get A Quote</a>
              </div>
              <div className="cta-box-cols">
                <Col className="cta-box box-2">
                  <h3>We've Got You Covered</h3>
                  <span>Your Diesel, CNG, Propane, Hybrid, and Electric Experts</span>
                  <a className="banner-cta-btn" onClick={renderServices}>Learn More</a>
                </Col>
                <Col className="cta-box box-3">
                  <h3>Preventive Maintenance Programs</h3>
                  <span>Carefully reviewing the needs of your fleet and providing personalized recommendations.</span>
                  <a className="banner-cta-btn" onClick={renderServices}>Learn More</a>
                </Col>
              </div>
            </Col>
          </div>
      <Container style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <Row>
          <Col md={6} sm={12} id="text-bubble-home">
            <h2 >Tailored to your needs
            </h2>
            Getting new buses and need specifications, or factory line inspections?
            Contracting services, need to have a third party evaluate how your contractors
             are doing? These are special services, involving some knowledge of FTA rules
             and regulations. Our experienced team is ready to show you how this can be
             done.  We can walk you through the process.
          </Col>
          <Col>
            <Image id="front-of-bus" src={bus}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;