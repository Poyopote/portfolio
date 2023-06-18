import React, { useState, useEffect } from "react";
import { HomeIcon, IdentificationIcon,CursorArrowRaysIcon , CogIcon } from "@heroicons/react/24/solid";

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

  const links = [
    { text: "Accueil", icon: <HomeIcon className="h-8 w-8" />, href: "#main-header" },
    { text: "À propos", icon: <IdentificationIcon className="h-8 w-8" />, href: "#about-section" },
    { text: "Projet", icon: <CursorArrowRaysIcon className="h-8 w-8" />, href: "#projects-section" },
    { text: "Compétences", icon: <CogIcon className="h-8 w-8" />, href: "#skills-section" },
  ];

  const renderLinks = () => {
    return links.map((link, index) => {
      if (isMobile) {
        return (
          <li className="md:flex-1" key={index}>
            <a href={link.href} aria-label={link.text} className="nav-link md:rounded-full inline-block text-primary font-bold p-2">
              {link.icon}
            </a>
          </li>
        );
      } else {
        return (
          <li className="" key={index}>
            <a href={link.href} className="nav-link rounded-full text-secondary font-bold py-2 px-4">
              {link.text}
            </a>
          </li>
        );
      }
    });
  };

  return (
    <nav className="main-nav fixed md:absolute max-md:bottom-0 bottom-8 xl:bottom-16 mt-9 md:mt-0 z-40 max-md:bg-customWhiteBlue max-md:w-full">
      <ul className="nav-list flex justify-center gap-6 md:gap-12 mx-2 md:mx-auto max-md:justify-evenly">
        {renderLinks()}
      </ul>
    </nav>
  );
}

export default Navigation;
