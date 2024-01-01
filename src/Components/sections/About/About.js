import React from "react";
import './About.css';
import {IdentificationIcon, FaceSmileIcon} from "@heroicons/react/24/solid";
import Lottie from 'lottie-react';
import frame from "../../../assets/animation/Frame 1.json"


function About() {
    return(
        <section id="about-section" className="relative py-24 in-the-light max-md:pt-3">
            
            <article className="flex flex-col gap-8 lg:flex-row lg:gap-12 md:items-center justify-center mx-auto lg:w-9/12">
                <div className="w-full md:w-4/12 px-4">
                    <div id="blob" className="hidden sm:block sm:w-56 sm:h-56 md:w-full md:h-auto md:pt-[100%] m-auto -hue-rotate-15"></div>
                </div>
                <div className="w-full md:w-8/12 px-4 max-w-2xl">
  <h2>À propos de moi <IdentificationIcon className="h-8 w-8 inline-block" /></h2>
  {/* <span><Lottie className="h-56 w-56 inline-block" animationData={frame} /></span> */}
  <p>Bienvenue, je suis <u>Steven LADOUR</u>. Je suis ravi de vous accueillir ici. J'occupe plusieurs métiers,
   notamment celui de <strong>webdesigner</strong> et de <strong>développeur front-end</strong>.
    Grâce à mes compétences polyvalentes, je suis en mesure de répondre aux besoins d'autres domaines. 
    Cependant, c'est dans la <strong>conception d'interfaces utilisateur</strong> que je m'épanouis pleinement.</p>
  <p>Ce portfolio est une fenêtre ouverte sur ma vision artistique et différents projets réalisés 
  au cours de mon parcours d'apprentissage. <em>Bonne visite ! <FaceSmileIcon className="h-6 w-6 inline-block" /></em></p>
</div>

            </article>
            <svg className="w-full absolute bottom-0 h-16 md:h-auto fill-primary" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
                <path  d="M600 112.77C268.63 112.77 0 65.52 0 7.23V120h1200V7.23c0 58.29-268.63 105.54-600 105.54z"
                    className="shape-fill">
                </path>
            </svg>
        </section>
    )
}

export default About;