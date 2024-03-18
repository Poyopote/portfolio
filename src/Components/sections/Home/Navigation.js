import {
  CogIcon,
  CursorArrowRaysIcon,
  HomeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useMemo, useState } from "react";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Définir la limite de largeur pour considérer comme mobile
    };

    // Ajouter un écouteur d'événement pour détecter le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Appel initial pour définir l'état en fonction de la taille de l'écran actuelle
    handleResize();

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = useMemo(
    () => [
      {
        text: "Accueil",
        icon: <HomeIcon className="h-8 w-8" />,
        href: "#main-header",
      },
      {
        text: "À propos",
        icon: <IdentificationIcon className="h-8 w-8" />,
        href: "#about-section",
      },
      {
        text: "Projets",
        icon: <CursorArrowRaysIcon className="h-8 w-8" />,
        href: "#projects-section",
      },
      {
        text: "Compétences",
        icon: <CogIcon className="h-8 w-8" />,
        href: "#skills-section",
      },
    ],
    []
  );

  const renderedLinks = useMemo(() => {
    return links.map((link, index) => {
      if (isMobile) {
        return (
          <li className="md:flex-1 flex" key={index}>
            <a
              href={link.href}
              aria-label={link.text}
              className="md:rounded-full inline-block text-primary font-bold p-2"
            >
              {link.icon}
            </a>
          </li>
        );
      } else {
        return (
          <li className="p-3" key={index}>
            <a href={link.href} className=" text-[#11383c] font-bold ">
              <span className="flex flex-col items-center border-transparent border-b-2 hover:border-customBlack">
                {link.icon}
                {link.text}
              </span>
            </a>
          </li>
        );
      }
    });
  }, [links, isMobile]);

  return (
    <nav className="main-nav max-md:fixed bottom-0 mt-9 md:mt-0 z-40 max-md:w-full">
      <ul className="flex flex-row space-x-4 items-center justify-center mx-auto bg-customWhiteBlue md:bg-opacity-30 shadow-lg rounded-2xl">
        {renderedLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
