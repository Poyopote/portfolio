import React, { useState } from "react";
import './Projects.css';
import ProjectNavigation from "./ProjectNavigation";
import ProjectDescription from "./ProjectDescription";
import ProjectCarousel from "./ProjectCarousel";
import projectsData from "../../../data/projectsData";
import {CursorArrowRaysIcon} from "@heroicons/react/24/solid";

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectChange = (index) => {
    setActiveProjectIndex(index);
  };

  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="projects-section" className="in-the-dark pb-7 lg:min-h-[1238px]">
      <article className="w-full text-center pt-32 relative z-10 in-the-dark">
        <h2>Projects <CursorArrowRaysIcon className="h-8 w-8 inline-block"/></h2>
        <ProjectNavigation
        projects={projectsData}
        activeProjectIndex={activeProjectIndex}
        onProjectChange={handleProjectChange}
        />
        {/* grid md:grid-cols-2 gap-y-8 md:gap-9 w-full lg:h-[600px] text-primary sm:w-9/12 mx-auto */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-y-8 md:gap-4 w-full lg:w-10/12 xl:w-9/12 mx-auto'>
          <ProjectDescription project={activeProject} />
          <ProjectCarousel media={activeProject.media} /> {/* Utilise le composant ProjectCarousel */}
        </div>
      </article>
    </section>
  );

    }


  export default Projects;