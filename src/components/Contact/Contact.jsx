import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import SocialIcons from "../SocialIcons/SocialIcons";
import Phone from "../../styles/Icons/Phone";
import Message from "../../styles/Icons/Message";

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const SendEmail = (e) => {
    e.preventDefault();
    if (nameValue.length < 2) {
      setError("Name should have at least 2 characters.");
      return;
    }
    if (textareaValue.length < 2) {
      setError("textarea should have at least 2 characters.");
      return;
    }
    if (!isValidEmail(mailValue)) {
      setError("Please enter a valid gmail address.");
      return;
    }
    console.log("submited");
    setNameValue("");
    setTextareaValue("");
    setMailValue("");
    setIsSent(true);
    setError("");
  };

  return (
    <div className="contact-contaniner container white flex">
      <div className="contact-contaniner__left">
        <Header />
      </div>
      <div className="contact-contaniner__right flex">
        <div className="contact-contaniner__right--first">
          <div className="flex column adress-cont gap">
            <h2 className="ttl">Adress</h2>
            <h3>Tbilisi</h3>
            <h3>Georgia</h3>
            <div className="phone flex gap">
              <Phone />
              <a href="tel:995595616948">+ 995595616948</a>
            </div>
            <div className="mesage flex gap">
              <Message />{" "}
              <a href="mailto:example@example.com">ggnadirashvilii@gmail.com</a>
            </div>
          </div>
          <div className="social">
            <h2 className="ttl">Follow</h2>
            <div className="icons">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="contact-contaniner__right--second flex column">
          <h2 className="ttl">Message</h2>
          <form onSubmit={SendEmail}>
            <div className="flex column gap-25">
              <div className="flex gap-25 input-cont">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  className={error && nameValue.length < 2 ? "error" : ""}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  value={mailValue}
                  onChange={(e) => setMailValue(e.target.value)}
                  className={error && !isValidEmail(mailValue) ? "error" : ""}
                />
              </div>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                placeholder="Type Message..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                className={error && textareaValue.length < 2 ? "error" : ""}
              ></textarea>

              <div className="flex j-center">
                <button className="btn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
