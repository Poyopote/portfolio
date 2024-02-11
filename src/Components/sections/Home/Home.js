import React from "react";
import "./Home.css";
import pdf from "../../../assets/doc/CV_Steven_Ladour.pdf";
import Animation from "./Anima";
import Typewriter from "./Typewriter";
import Button from "../../common/Button";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
// import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Navigation from "./Navigation";
import Lottie from "lottie-react";
import Logo from "../../../assets/animation/slfolio.json";

function Home() {
  return (
    <header
      id="main-header"
      className="in-the-light relative flex flex-col items-center justify-center md:h-screen gap-8"
    >
      <Animation />
      <div className="logo-container z-10 flex flex-col items-center justify-end gap-3 md:h-96">
        <span>
          <Lottie
            className="logo inline-block w-60 md:w-[300px] p-4"
            animationData={Logo}
          />
        </span>
        {/* <img src={logo} alt="Logo SL" loading="lazy" width="208" className="logo inline-block w-52 md:w-[280px] p-4"/> */}
        <Typewriter className="text-5xl sm:text-6xl relative h-6 mb-6" />
      </div>
      <div className="flex z-10 w-full justify-center gap-2 my-3">
        <Button color="primary" link={pdf} text="Mon CV">
          <DocumentTextIcon className="h-6 w-6" />
        </Button>
        <Button
          color="secondary"
          link="https://www.linkedin.com/in/steven-ladour"
          text="Linkedin"
        >
          <i className="devicon-linkedin-plain text-xl"></i>
        </Button>
      </div>
      <Navigation />
    </header>
  );
}

export default Home;
