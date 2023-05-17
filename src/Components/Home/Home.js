import React from "react";
import './Home.css';
import logo from '../../assets/img/logo.svg';
import pdf from '../../assets/doc/CV 2023 -04.pdf';
import Animation from "./animation/Anima";
import Typewriter from "./animation/Typewriter";
import Button from "./animation/Button";
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';



function Home() {
    return (
        <header id="main-header" className="in-the-light relative flex flex-col items-center justify-center md:h-screen">
        <Animation className=""/>
        <div className="logo-container z-10">
          <img src={logo} alt="Logo SL" loading="lazy" className="logo inline-block w-52 md:w-[280px] p-4"/>
          <Typewriter className=" text-4xl sm:text-6xl h-6 relative"/>
        </div>
        <div className="flex z-10 w-full justify-center ">
        
          <Button color="primaire" link={pdf} text="Mon CV">
            <DocumentTextIcon className="h-6 w-6" />
          </Button>
          <Button color="secondaire" link="contact.html" text="Contact">
            <EnvelopeOpenIcon className="h-6 w-6" />
          </Button>
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