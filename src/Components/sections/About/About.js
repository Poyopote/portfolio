import { IdentificationIcon } from "@heroicons/react/24/solid"; //FaceSmileIcon
import React from "react";
import "./About.css";
// import Lottie from 'lottie-react';
// import frame from "../../../assets/animation/Frame 1.json"
import StopAnimation from "../../common/StopAnimation";

function About() {
  return (
    <section
      id="about-section"
      className="relative py-24 in-the-light max-md:pt-3"
    >
      <article className="flex flex-col gap-8 lg:flex-row lg:gap-12 md:items-center justify-center mx-auto lg:w-9/12 mb-16">
        <div className="w-full md:w-4/12 px-4">
          <StopAnimation>
            <div
              id="blob"
              className="hidden sm:block sm:w-56 sm:h-56 md:w-full md:h-auto md:pt-[100%] m-auto -hue-rotate-15"
            ></div>
          </StopAnimation>
        </div>

        <div className="w-full md:w-8/12 px-4 max-w-2xl max-lg:text-center max-md:px-7">
          <h2>
            Steven LADOUR{" "}
            <IdentificationIcon className="h-8 w-8 inline-block" />
          </h2>
          <p className="lg:text-2xl font-bold">
            Concepteur d'interfaces utilisateur axé sur l'accessibilité avec
            expertise en développement et intégration
          </p>
          <br></br>
          <p className="italic">UX/UI • Développement Front • SEO</p>
          {/* <p>Je suis <u>Steven LADOUR</u>. Passionné par le web, je veux créer des interfaces accessibles et originales, en maîtrisant le développement et l'intégration web.</p> */}
        </div>
      </article>

      <svg
        className="w-full absolute bottom-0 h-16 md:h-auto fill-primary"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600 112.77C268.63 112.77 0 65.52 0 7.23V120h1200V7.23c0 58.29-268.63 105.54-600 105.54z"
          className="shape-fill"
        ></path>
      </svg>
    </section>
  );
}

export default About;
