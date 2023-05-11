import React, { useState } from "react";
import './Projects.css';

function Projects() {
    const [activeProject, setActiveProject] = useState("project1");

    const handleClick = (e) => {
        const project = e.target.dataset.project;
        setActiveProject(project);
      };

      return (
        <section id="projects-section">
          <h2>Projects</h2>
          <nav>
            <button className={`project-button ${activeProject === "project1" ? "active" : ""}`} data-project="project1" onClick={handleClick}>Project 1</button>
            <button className={`project-button ${activeProject === "project2" ? "active" : ""}`} data-project="project2" onClick={handleClick}>Project 2</button>
            <button className={`project-button ${activeProject === "project3" ? "active" : ""}`} data-project="project3" onClick={handleClick}>Project 3</button>
          </nav>
          <div className="project-container">
            {activeProject === "project1" && (
              <div>
                gfdgdfg
              </div>
            )}
            {activeProject === "project2" && (
              <div>
                gfhtr
              </div>
            )}
            {activeProject === "project3" && (
              <div>
                uiuyiu
              </div>
            )}
          </div>
        </section>
      );
    }


    // state = {
    //     projects : [
    //         {project : 1, name: "Portfolio"},
    //         {project : 2, name: "Kabuki"},
    //         {project : 3, name: "Flow"},
    //         {project : 4, name: "Ré.édifica"},
    //         {project : 5, name: "Sakadanse"}
    //     ]
    // };

  export default Projects;