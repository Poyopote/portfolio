// ProjectDescription.js

import React from 'react';

const ProjectDescription = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <project.icon className="w-6 h-6" /> {/* Ajoute la classe de taille appropriée à l'icône */}
    </div>
  );
}

export default ProjectDescription;
