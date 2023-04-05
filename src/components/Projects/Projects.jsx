import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import projectsData from "../../projectsData";
function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const filterProjects = (category) => {
    const filtered =
      category === "All"
        ? projectsData
        : projectsData.filter((project) => project.category === category);
    setFilteredProjects(filtered);
  };

  return (
    <div className="projects-container container white flex">
      <div className="projects-container__left">
        <Header />
      </div>
      <div className="column">
        <div className="projects-container__right ">
          <div className="flex column al-center gap-25">
          <h2 className="ttl">Projects</h2>
            <div className="flex gap-25">
              <button
                className={activeButton === "All" ? "active" : "white"}
                onClick={() => filterProjects("All")}
              >
                <a onClick={() => handleClick("All")}>All</a>
              </button>
              <button
                className={activeButton === "Vue" ? "active" : "white"}
                onClick={() => filterProjects("Vue")}
              >
                <a onClick={() => handleClick("Vue")}>Vue</a>
              </button>
              <button
                className={activeButton === "React" ? "active" : "white"}
                onClick={() => filterProjects("React")}
              >
                <a onClick={() => handleClick("React")}>React</a>
              </button>
            </div>
          </div>
          <div>
            <div className="project-cards">
              {filteredProjects.map((project) => (
                <div key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <img src={project.image} alt={project.title} />
                  <a className="btn flex al-center j-center" href={project.url}>
                    View project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
