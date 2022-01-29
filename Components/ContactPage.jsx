import React from "react";
import Container from 'react-bootstrap/Container';

const ContactPage = function() {
  return (
    <Container>
      <h2 id="contact-title">lets get in touch</h2>
      <p id="contact-details">please feel free to email us anytime!</p>
      <p id="contact-details-bottom">phone hours: 9am - 7pm</p>
      <div id="contact-text-bubble">
        <h3>Contact via Email</h3>
        <p>transitmanagmentconsulting@gmail.com</p>
        <h3>Give us a Call</h3>
        <p>(512) 626-7681</p>
      </div>
    </Container>
  )
}

export default ContactPage;