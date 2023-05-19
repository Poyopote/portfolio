// ProjectDescription.js

import React from 'react';

const ProjectDescription = ({ project }) => {
  const { title, description, icons, links } = project;
  console.log(icons);

  const getIconComponent = (icon) => {
    switch (icon.type) {
      case 'hero':
        return React.createElement(icon.component, { className: 'h-6 w-6' });
      case 'svg':
        return <img src={icon.source} alt="Icon" className='h-12'/>;
      // Ajoutez d'autres cas pour les types d'icônes supplémentaires ici
  
      default:
        return null; // Ou affiche un composant d'icône par défaut si aucun type correspondant n'est trouvé
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>

      {icons && icons.length > 0 && (
        <div>
          {icons.map((icon, index) => (
            <span key={index} className="icon">
              {getIconComponent(icon)}
            </span>
          ))}
        </div>
      )}

              


      {links && links.length > 0 && (
        <div>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}



export default ProjectDescription;

