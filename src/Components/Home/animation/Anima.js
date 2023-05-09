import { useState, useEffect } from "react";
import './Anima.css';
// import wave0 from "../../../assets/img/wave-1.svg";

function Animation() {
  
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      let animationFrameId;
      const speed = 0.9;
  
      const step = (time) => {
        setOffset((prevOffset) =>
          prevOffset < 628 ? prevOffset + speed : 0
        );
        animationFrameId = window.requestAnimationFrame(step);
      };
      animationFrameId = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrameId);
    }, []);
  
    // return (
    //   <svg
    //     className="wave"
    //     viewBox="0 0 628 55.5"
    //     xmlns="http://www.w3.org/2000/svg"
    //     preserveAspectRatio="none"
    //   >
    //     <path
    //       d="M-5.12,32.45 C146.71,-37.80 463.29,148.85 628.12,32.45 L628.12,78.68 L-5.12,78.68 Z"
    //       style={{ transform: `translate(${offset}px, 0)` }}
    //     />
    //     <path
    //       d="M-5.12,32.45 C146.71,-37.80 463.29,148.85 628.12,32.45 L628.12,78.68 L-5.12,78.68 Z"
    //       style={{ transform: `translate(${offset + 125}px, 0)` }}
    //     />
    //   </svg>

  


  return (


//     
        <div className="waves-container">
    
          <div className="wave wave5"></div>
          <div className="wave wave4"></div>
          <div className="wave wave3"></div>
          <div className="wave wave2"></div>
          <div className="wave wave1"></div>

        </div>
  );
};

export default Animation;
