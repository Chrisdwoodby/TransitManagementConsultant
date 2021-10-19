import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import repair from '../media/repair.png';
import Image from 'react-bootstrap/Image';
import shop from '../media/shop.png';
import logoStrip from '../media/logoStrip.png';

const Services = function() {
  return (
    <div style={{paddingBottom: "200px"}}>
      <Container style={{color: "white", fontFamily: "sans-serif", letterSpacing: "2px"}}>
        <Row style={{padding: "50px"}}>
          <Col style={{padding: "50px"}}>
            <h3 >Preventive Maintenance Programs</h3>
            <Row>With a careful and thorough review of your fleet
            and operating profile, a PM Program can be produced that will fully address the
            vehicles' needs over their expected life.  It will meet or exceed manufacturer's
            standards as well as FTA audit standards. The Program will be centered on Safety,
            Reliability and Appearance.
            </Row>
          </Col>
          <Col style={{padding: "50px"}}>
            <h3>Shop Audits</h3>
            <Row>Our team can conduct a review of your shop, the procedures
               and practices that can affect productivity and communication.
               Providing back to management valuable feedback as to efficiency
               and effectiveness of the department. This process takes a 360
               view of how the shop operates, how labor and parts are coordinated,
               how scheduled and unscheduled work is completed.
            </Row>
          </Col>
        </Row>
        <Image src={shop}/>
        <Row style={{padding: "50px"}}>
          <Col style={{padding: "50px"}}>
            <h3>Contracted Services Review</h3>
            <Row>
              Our team is experienced in reviews of maintenance shop operations. Is the
              work being done as stated in the RFP/Contract documents. A review will
              include a thorough reading and understanding of the contract and client
              expectations. The performance by the contractor will be evaluated as
              to: are the needs of the vehicles being met; are the needs of the Client
              being met, and are all of the needs documented?
            </Row>
          </Col>
          <Col style={{padding: "50px"}}>
            <h3>Bus Procurements</h3>
            <Row>
              Our team can provide reviews of bus and van technical specifications,
              as well as bus line inspection services. Bus line Inspections can be
              conducted for any number of vehicles at any US and Canadian facility.
              Bus procurement technical specifications can be made completely
              from scratch, or be given a review prior to publishing. We have
              experience with vehicles fueled with diesel, CNG, propane, and electric.
            </Row>
          </Col>
        </Row>
      </Container>
      <Image width="1800" style={{paddingRight: "200px", paddingLeft: "200px"}} src={logoStrip}/>
    </div>
  )
}

export default Services;