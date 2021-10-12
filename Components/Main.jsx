import React, {useState, useEffect} from "react";
import NavHeader from "./NavHeader.jsx";
import HomePage from "./HomePage.jsx";


const Main = function() {
  return (
    <div>
      <NavHeader/>
      <HomePage/>
    </div>
  )
}

export default Main;