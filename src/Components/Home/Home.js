import React from "react";
import './Home.css';
import logo from '../../assets/img/logo.svg';


function Home() {
    return (
        <header id="main-header">
        <div className="animation" />
        <div className="logo-container text-center">
          <img src={logo} alt="My Logo" className="logo" />
          <h1 className="site-title">My Portfolio</h1>
        </div>
        <div className="buttons">
          <a href="cv.pdf" className="btn">
            CV
          </a>
          <a href="contact.html" className="btn">
            Contact
          </a>
        </div>
        <nav className="main-nav">
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