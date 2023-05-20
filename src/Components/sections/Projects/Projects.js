import React, { useState } from "react";
import './Projects.css';
import ProjectNavigation from "./ProjectNavigation";
import ProjectDescription from "./ProjectDescription";
import ProjectCarousel from "./ProjectCarousel";
import projectsData from "../../../data/projectsData";

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectChange = (index) => {
    setActiveProjectIndex(index);
  };

  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="projects-section" className="in-the-dark">
      <article className="w-full sm:w-9/12 mx-auto text-center pt-20 ">
        <h2>Projects</h2>
        <ProjectNavigation
        projects={projectsData}
        activeProjectIndex={activeProjectIndex}
        onProjectChange={handleProjectChange}
        />
        <div className='grid md:grid-cols-2 gap-y-8 md:gap-9'>
          <ProjectDescription project={activeProject} />
          <ProjectCarousel media={activeProject.media} /> {/* Utilise le composant ProjectCarousel */}
        </div>
      </article>
    </section>
  );

    }


  export default Projects;