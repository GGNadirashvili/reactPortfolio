import React from "react";
import PersinalInfo from "../Header/Header"
function Resume() {
  return (
    <div className="about-container container white">
      <div className="about-container__left">
        <PersinalInfo />
      </div>
      <div>
        <div className="first">My Education</div>
        <div className="second">my Experience</div>
      </div>
    </div>
  );
}

export default Resume;
