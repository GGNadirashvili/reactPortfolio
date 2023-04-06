import React from "react";
import Facebook from "../../styles/Icons/Facebook";
import Linkedin from "../../styles/Icons/Linkedin";
import Github from "../../styles/Icons/Github";
function SocialIcons() {
  const handleFacebook = () => {
    window.open("https://www.facebook.com/Nadirashvili"); // Replace with your desired Facebook link
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/giorgi-nadirashvili-a67045216"); // Replace with your desired Facebook link
  };
  const handleGithub = () => {
    window.open("https://github.com/GGNadirashvili"); // Replace with your desired Facebook link
  };

  return (
    <div className="flex gap-25">
      <div onClick={handleFacebook} className="pointer">
        <Facebook />
      </div>
      <div onClick={handleLinkedin} className="pointer">
        <Linkedin />
      </div>
      <div onClick={handleGithub} className="pointer">
        <Github />
      </div>
    </div>
  );
}

export default SocialIcons;
