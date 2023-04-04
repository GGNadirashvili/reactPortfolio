import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

function Testimonial() {
  return (
    <div className="testimonial-container container white flex">
      <div className="testimonial-container__left">
        <PersonalInfo />
      </div>
      <div className="testimonial-container__Right">Testimonial</div>
    </div>
  );
}

export default Testimonial;
