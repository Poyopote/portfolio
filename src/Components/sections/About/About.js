import React from "react";
import './About.css';
import {IdentificationIcon} from "@heroicons/react/24/solid";

function About() {
    return(
        <section id="about-section" className="relative py-24 in-the-light max-md:pt-3">
            
            <article className="flex flex-col gap-8 lg:flex-row lg:gap-12 md:items-center mx-auto lg:w-9/12">
                <div className="w-full md:w-4/12 px-4">
                    <div id="blob" className="hidden sm:block sm:w-56 sm:h-56 md:w-full md:h-auto md:pt-[100%] m-auto -hue-rotate-15"></div>
                </div>
                <div className="w-full md:w-8/12 px-4 max-w-xl">
                    <h2>À propos de moi <IdentificationIcon className="h-8 w-8 inline-block" /></h2>
                    <p>
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                    </p>
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