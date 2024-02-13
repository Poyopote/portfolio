// ProjectDescription.js
import React from "react";

const ProjectDescription = ({ project }) => {
  const { title, description } = project;

  return (
    <div className="project-description flex flex-col justify-center lg:justify-start items-center sm:py-9 sm:px-10 p-2 lg:col-span-3">
      <div className="text-left container relative w-full">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProjectDescription;
