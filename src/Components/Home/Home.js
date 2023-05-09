import React from "react";
import './Home.css';
import logo from '../../assets/img/logo.svg';
import pdf from '../../assets/doc/CV 2023 -04.pdf';
import Animation from "./animation/Anima";
import Typewriter from "./animation/Typewriter";


function Home() {
    return (
        <header id="main-header" className="relative flex flex-col items-center justify-center md:h-screen">
        <Animation className="absolute z-0 "/>
        <div className="logo-container z-10">
          <img src={logo} alt="Logo SL" className="logo inline-block  max-w-[280px]"/>
          <Typewriter />
        </div>
        <div className="buttons ">
          <a href={pdf} className="btn1">
            
            Mon CV
          </a>
          <a href="contact.html" className="btn2">
            Contact
          </a>
        </div>
        <nav className="main-nav z-10">
          <ul className="nav-list flex justify-center space-x-4">
            <li>
              <a href="#main-header" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#about-section" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects-section" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills-section" className="nav-link">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
    );
  }

  export default Home;