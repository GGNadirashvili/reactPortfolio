import React from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

function Testimonial() {
  return (
    <div className="testimonial-container container white flex">
      <div className="testimonial-container__left">
        <Header />
      </div>
      <div className="testimonial-container__right flex j-center al-center">
        <div className="testimonial-container__right flex j-center column ">
          <h2 className="ttl">Testimonials</h2>
          <div>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
