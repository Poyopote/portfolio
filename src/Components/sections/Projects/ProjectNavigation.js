import React from "react";

const ProjectNavigation = ({ projects, activeProjectIndex, onProjectChange }) => {
  return (
    <nav className="flex justify-around my-12">
      {projects.map((project, index) => (
        <button
          key={index}
          className={`project-button ${index === activeProjectIndex ? "active" : ""}`}
          onClick={() => onProjectChange(index)}
        >
          {project.title}
        </button>
      ))}
    </nav>
  );
};

export default ProjectNavigation;
