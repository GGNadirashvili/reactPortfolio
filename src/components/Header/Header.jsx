import React from "react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../../styles/images/me.jpg";
import { useState } from "react";

function Header() {
  const [activePage, setActivePage] = useState("/");
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="header-container">
      <img src={ProfilePhoto} alt="" />
      <h2 className="regular">Giorgi Nadirashvili</h2>
      <ul className="flex column ">
        <li className={activePage === "" ? "active" : ""}>
          <Link onClick={() => handlePageClick("")} to="/">
            Home
          </Link>
        </li>
        <li className={activePage === "about" ? "active" : ""}>
          <Link onClick={() => setActivePage("about")} to="/about">
            About
          </Link>
        </li>
        <li className={activePage === "resume" ? "active" : ""}>
          <Link onClick={() => handlePageClick("resume")} to="/resume">
            Resume
          </Link>
        </li>

        <li className={activePage === "projects" ? "active" : ""}>
          <Link onClick={() => handlePageClick("projects")} to="/projects">
            Projects
          </Link>
        </li>
        <li className={activePage === "testimonial" ? "active" : ""}>
          <Link
            onClick={() => handlePageClick("testimonial")}
            to="/testimonial"
          >
            Testimonial
          </Link>
        </li>
        <li className={activePage === "contact" ? "active" : ""}>
          <Link onClick={() => handlePageClick("contact")} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
