import React, {useState, useEffect} from "react";
import NavHeader from "./NavHeader.jsx";
import HomePage from "./HomePage.jsx";
import Services from "./Services.jsx";
import ContactPage from "./ContactPage.jsx";
import Footer from './Footer.jsx';
import About from './About.jsx';

const Main = function(props) {

  const [renderHome, setHome] = useState(true);
  const [renderServices, setServices] = useState(false);
  const [renderContact, setContact] = useState(false);
  const [renderAbout, SetAbout] = useState(false);

  const renderAuthentication = function() {
    if (renderHome) {
      return <HomePage/>
    } else if (renderServices) {
      return <Services />
    } else if (renderContact) {
      return <ContactPage/>
    } else if (renderAbout) {
      return <About/>
    }
  }

  return (
    <div style={{backgroundColor: "#17252a"}}>
      <NavHeader setHome={setHome} renderAuthentication={renderAuthentication}setServices={setServices}setContact={setContact} SetAbout={SetAbout}/>
      {renderAuthentication()}
      <Footer/>
    </div>
  )
}

export default Main;