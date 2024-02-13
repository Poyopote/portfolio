import React from "react";

// Composant pour afficher les icônes SVG provenant du dossier assets/svg
const SvgIcon = ({ source, className }) => {
  return (
    <img
      src={require(`../assets/svg/${source}`)}
      alt="Icon"
      className={className}
    />
  );
};

// Composant pour afficher les icônes de la bibliothèque HeroIcons
const HeroIcon = ({ icon, className }) => {
  const HeroIconComponent = icon; // Le nom de l'icône est passé en tant que composant

  return <HeroIconComponent className={className} />;
};

export { HeroIcon, SvgIcon };
