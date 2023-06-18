import React, { useState, lazy, Suspense } from "react";
import './Projects.css';
import ProjectNavigation from "./ProjectNavigation";
import ProjectDescription from "./ProjectDescription";
// import ProjectLayout from "./ProjectLayout";
import projectsData from "../../../data/projectsData";
import {CursorArrowRaysIcon} from "@heroicons/react/24/solid";
const ProjectLayout = lazy(() => import("./ProjectLayout"));

const LoadingPlaceholder = () =>     <div className="project-layout flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
<div className="container">
Chargement...
</div>
</div>;


const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectChange = (index) => {
    setActiveProjectIndex(index);
  };

  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="projects-section" className="in-the-dark pb-7 lg:min-h-[1238px]">
      <article className="w-full text-center pt-20 relative z-10 in-the-dark">
        <h2>Projects <CursorArrowRaysIcon className="h-8 w-8 inline-block"/></h2>
        <ProjectNavigation
        projects={projectsData}
        activeProjectIndex={activeProjectIndex}
        onProjectChange={handleProjectChange}
        />
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-y-8 md:gap-4 w-full lg:w-10/12 xl:w-9/12 mx-auto bg-primary text-customWhite '>
          <ProjectDescription project={activeProject} />
          <Suspense fallback={<LoadingPlaceholder />}>
            <ProjectLayout
              layout={activeProject.layout}
              media={activeProject.media}
            />
          </Suspense>
        </div>
      </article>
    </section>
  );

    }


  export default Projects;