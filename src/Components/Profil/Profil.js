import React from "react";
import logo from '../../assets/img/logo.svg';
import './Profil.css';
function Profil() {
    return(
        <section id="about-section" className="  py-24">
            
            <article className="md:flex w-10/12 m-auto items-center">
                <div className="w-full md:w-4/12 px-4">
                    {/* <img src="" alt="je suis un image" className="" /> */}
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

        </section>
    )
}

export default Profil;