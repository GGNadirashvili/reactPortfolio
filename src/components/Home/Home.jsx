import React from "react";
import PersinalInfo from "../PersonalInfo/PersonalInfo";
function AppHeader() {
  return (
    <section className="home-container container white flex">
      <div className="home-container__left">
        <PersinalInfo />
      </div>
      <div className="home-container__right flex column al-center">
        <h1>Wellcome</h1>
        <h3>I Am A Front-End Developer</h3>
        <h4>based in Tbilisi, Georgia.</h4>
        <button className="btn">Hire me</button>
      </div>
    </section>
  );
}

export default AppHeader;
