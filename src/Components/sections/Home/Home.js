import React from "react";
import './Home.css';
import logo from '../../../assets/svg/logo.svg';
import pdf from '../../../assets/doc/CV 2023 -04.pdf';
import Animation from "./Anima";
import Typewriter from "./Typewriter";
import Button from "../../common/Button";
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Navigation from "./Navigation";



function Home() {
    return (
        <header id="main-header" className="in-the-light relative flex flex-col items-center justify-center md:h-screen">
        <Animation/>
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
        <Navigation/>
      </header>
      
    );
  }

  export default Home;