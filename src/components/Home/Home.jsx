import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
function Home() {
  return (
    <section className="home-container container white flex">
      <div className="home-container__left">
        <Header />
      </div>
      <div className="home-container__right flex column al-center">
        <h3>Wellcome</h3>
        <h2 className="animated-text">I Am A Front-End Developer</h2>
        <h4>based in Tbilisi, Georgia.</h4>
        <li>
          <Link to="/contact">
            <button className="btn">Hire me</button>
          </Link>
        </li>
      </div>
    </section>
  );
}

export default Home;
