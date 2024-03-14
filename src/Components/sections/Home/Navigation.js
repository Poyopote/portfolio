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
            <a href={link.href} className=" text-secondary font-bold py-2 px-4">
              <span className="flex flex-col items-center">
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
    <nav className="main-nav max-md:fixed bottom-0 mt-9 md:mt-0 z-40 max-md:w-full px-2 py-4 bg-white rounded-2xl shadow-xl">
      <ul className="flex flex-row space-x-3 justify-around">
        {renderedLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
