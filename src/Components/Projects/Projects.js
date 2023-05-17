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
          <article  className="w-full sm:w-9/12 m-auto text-center pt-20 ">
            <h2>Projects</h2>
            <nav className="flex justify-around my-12">
              <button className={`project-button ${activeProject === "project1" ? "active" : ""}`} data-project="project1" onClick={handleClick}>Portfolio</button>
              <button className={`project-button ${activeProject === "project2" ? "active" : ""}`} data-project="project2" onClick={handleClick}>Kabuki</button>
              <button className={`project-button ${activeProject === "project3" ? "active" : ""}`} data-project="project3" onClick={handleClick}>Flow</button>
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
            <div>
              <div className="py-52 ">
                <h3>Titre du projet</h3>
                <p>Pargraphe du projet</p>
                <a href="">lien probable</a>
              </div>
              <div>
                <img src="" alt=""></img>
                <div>
                  <button>avant</button>
                  <span>1/2</span>
                  <button>après</button>
                </div>
              </div>
            </div>
          </article>
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