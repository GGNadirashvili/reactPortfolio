import React from "react";
import Header from "../Header/Header";

function About() {
  const cvUrl = "https://files.fm/u/srky2x9m5#/view/d2gng5vs8";

  return (
    <div className="about-container container white flex">
      <div className="about-container__left">
        <Header />
      </div>
      <div className="flex about-container__right ">
        <div className="about-container__right--first">
          <h2 className="ttl">Know Me More</h2>
          <div className="flex gap info-cont">
            <h3>I'm </h3>
            <h2 className="green">Giorgi Nadirashvili,</h2>{" "}
            <h3>a Front-End Developer</h3>
          </div>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Delivering work
            within time and budget which meets client’s requirements is our
            moto. Lorem Ipsum has been the industry's standard dummy text ever
            when an unknown printer took a galley.
          </p>
        </div>
        <div className="about-container__right--second flex column gap-25">
          <h3>Name:Giorgi Nadirashvili</h3>
          <h3>
            Email:
            <a class="green" href="mailto:example@example.com">
              GGnadirashvilii@gmail.com
            </a>
          </h3>
          <h3>Age:28</h3>
          <h3>From:Tbilisi,Georgia</h3>
          <div>
            <button className="btn">
              {" "}
              <a target="_blank" href={cvUrl} download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
