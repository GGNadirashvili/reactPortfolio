import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function AppHeader() {
  const [activePage, setActivePage] = useState("home");
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  return (
    <section className="header-cont container white flex al-center j-btw  ">
      <div>
        <h2 className="pointer">Logo</h2>
      </div>
      <div>
        <ul className="flex ">
          <li className={activePage === "" ? "active" : ""}>
            <Link onClick={() => handlePageClick("")} to="/">
              Home
            </Link>
          </li>
          <li className={activePage === "about" ? "active" : ""}>
            <Link onClick={() => handlePageClick("about")} to="/about">
              About
            </Link>
          </li>
          <li className={activePage === "contact" ? "active" : ""}>
            <Link onClick={() => handlePageClick("contact")} to="/contact">
              Contact
            </Link>
          </li>
          <li className={activePage === "projects" ? "active" : ""}>
            <Link onClick={() => handlePageClick("projects")} to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AppHeader;
