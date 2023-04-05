import React from "react";
import Header from "../Header/Header";
function Contact() {
  return (
    <div className="contact-contaniner container white flex">
      <div className="contact-contaniner__left">
        <Header />
      </div>
      <div className="contact-contaniner__right">
        <div className="first">
          <h2>Adress</h2>
        </div>
        <div className="second flex column">
          <h2>Send Us A Note</h2>
          <input type="text" name="" id="" placeholder="name" />
          <input type="text" name="" id="" placeholder="surname" />
          <textarea name="text" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Contact;
