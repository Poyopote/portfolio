import { useState, useEffect } from "react";
import './Anima.css';
// import wave0 from "../../../assets/img/wave-1.svg";

function Animation() {

  return (
    
        <div className="waves-container">
    
          <div className="wave wave5 opacity-70 md:opacity-100"></div>
          <div className="wave wave4 opacity-30 md:opacity-100"></div>
          <div className="wave wave3 opacity-30 md:opacity-100"></div>
          <div className="wave wave2"></div>
          <div className="wave wave1"></div>

        </div>
  );
};

export default Animation;
