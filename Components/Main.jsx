import React, {useState, useEffect} from "react";
import NavHeader from "./NavHeader.jsx";
import HomePage from "./HomePage.jsx";
import Services from "./Services.jsx";
import ContactPage from "./ContactPage.jsx";

const Main = function(props) {

  const [renderHome, setHome] = useState(true);
  const [renderServices, setServices] = useState(false);
  const [renderContact, setContact] = useState(false);

  const renderAuthentication = function() {
    if (renderHome) {
      return <HomePage/>
    } else if (renderServices) {
      return <Services />
    } else if (renderContact) {
      return <ContactPage/>
    }
  }

  return (
    <div>
      <NavHeader setHome={setHome} renderAuthentication={renderAuthentication}setServices={setServices}setContact={setContact}/>
      {renderAuthentication()}
    </div>
  )
}

export default Main;