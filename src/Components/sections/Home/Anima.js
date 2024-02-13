import React, { useEffect, useRef } from "react";

function Animation() {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // L'élément n'est plus visible, ajout de la classe pour arrêter l'animation
          elementRef.current.classList.add("stopped-animation");
        } else {
          // L'élément est à nouveau visible, retirer la classe pour reprendre l'animation
          elementRef.current.classList.remove("stopped-animation");
        }
      },
      { threshold: 0.4 } // Définissez le seuil en fonction de vos besoins
    );

    observer.observe(elementRef.current);

    // Nettoyage de l'observateur lors du démontage du composant
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef} className="waves-container">
      <div className="wave wave5 max-md:hidden"></div>
      <div className="wave wave4 max-md:opacity-30"></div>
      <div className="wave wave3 max-md:opacity-30"></div>
      <div className="wave wave2"></div>
      <div className="wave wave1"></div>
    </div>
  );
}

export default Animation;
