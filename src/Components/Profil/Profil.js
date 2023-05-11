import React from "react";
import './Profil.css';
function Profil() {
    return(
        <section id="about-section" className=" relative py-24">
            
            <article className="md:flex w-9/12 m-auto items-center">
                <div className="w-full md:w-4/12 px-4">
                    <div id="blob" className="hidden sm:block sm:w-56 sm:h-56 md:w-full md:h-auto md:pt-[100%] m-auto"></div>
                </div>
                <div className="w-full md:w-8/12 px-4">
                    <h2>Je suis un titre</h2>
                    <p>
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                    </p>
                </div>
            </article>
            <svg className="w-full absolute bottom-0 h-16 md:h-auto fill-[#063148]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill" fill="#063148" fill-opacity="1"></path></svg>
        </section>
    )
}

export default Profil;