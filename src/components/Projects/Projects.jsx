import React from "react";
import Header from "../Header/Header";
function Projects() {
  return (
    <div className="projects-container container white flex">
      <div className="projects-container__left">
        <Header />
      </div>
     <div className="column">
     <div className="projects-container__right ">My Work</div>
      <div className="flex column">
        <div>Project Title  </div>
        <img
          src="https://images.unsplash.com/photo-1680122754388-16e4e226daa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
     </div>
    </div>
  );
}

export default Projects;
