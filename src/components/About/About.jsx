import React from "react";
import PersinalInfo from "../PersonalInfo/PersonalInfo";

function About() {
  return (
    <div className="about-container container white flex">
      <div>
        <PersinalInfo />
      </div>
      <div className="flex column">
        {" "}
        <div className="about-container__left">
          <h2>Know Me More</h2>
          <h3>I'm Simone Olivia, a Web Developer</h3>
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
        <div className="about_container__right">
          <h3>name: Giorgi Nadirashvili</h3>
          <h3>Email: GGnadirashvilii@gmail.com</h3>
          <h3>Age:28</h3>
          <h3>From:Tbilisi,Georgia</h3>
          <button className="btn"> Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
