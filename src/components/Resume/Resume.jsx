import React from "react";
import PersinalInfo from "../Header/Header";
function Resume() {
  return (
    <div className="resume-container container white flex">
      <div className="resume-container__left">
        <PersinalInfo />
      </div>
      <div className="resume-container__right flex">
        <div className="resume-container__right--first">
          <h2 className="ttl">My Education</h2>
          <div className="resume-card">
            <div className="resume-card__info">
              <h5>2018-2022</h5>
              <h3>Political Science</h3>
              <h4>Tbilisi State University</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="resume-card">
            <div className="resume-card__info">
              <h5>2022</h5>
              <h3>React</h3>
              <h4>Tbilisi School Of Communication</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="resume-card">
            <div className="resume-card__info">
              <h5>2022-2023</h5>
              <h3>DevOps</h3>
              <h4>Business And Technology University</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-container__right--second">
          <h2 className="ttl">My Experience</h2>

          <div className="resume-card">
            <div className="resume-card__info">
              <h5>2022/06 - 2022/12</h5>
              <h3>Front End-Developer</h3>
              <h4>Connect</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="resume-card">
            <div className="resume-card__info">
              <h5>2023 - Current</h5>
              <h3>Freelance Front End-Developer</h3>
              <h4>UpWork</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
