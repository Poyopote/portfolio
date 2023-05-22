import React from "react";

const ProjectNavigation = ({ projects, activeProjectIndex, onProjectChange }) => {
  return (
    <nav className="flex flex-wrap justify-center items-center my-12 gap-2 lg:gap-8 xl:gap-16 w-full sm:w-9/12 md:w-full relative">
      {projects.map((project, index) => (
        <button
          key={index}
          className={`project-button flex-grow-0 flex-shrink-0 sm:w-48 
          ${index === activeProjectIndex ? "active" : ""}`}
          onClick={() => onProjectChange(index)}
        >
          {project.title}
        </button>
      ))}
    </nav>
  );
};

export default ProjectNavigation;
