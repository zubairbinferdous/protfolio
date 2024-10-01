// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import "../App.css";
import profile from "../assets/borobhai.jpg";

const Hero = () => {
  const phrases = [
    "Assistant Operation Manager",
    "Project Manager",
    "Administrator",
    "Full Stack Developer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    if (typing && currentCharIndex < phrases[currentPhraseIndex].length) {
      typingTimeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100);
    } else if (!typing && currentCharIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex - 1);
      }, 50);
    } else if (
      typing &&
      currentCharIndex === phrases[currentPhraseIndex].length
    ) {
      typingTimeout = setTimeout(() => setTyping(false), 1500);
    } else if (!typing && currentCharIndex === 0) {
      setTyping(true);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [typing, currentCharIndex, currentPhraseIndex]);
  return (
    <div>
      <div className="section" id="home">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta
          porro repellat et numquam quidem veritatis? Voluptatibus consectetur,
          repudiandae culpa assumenda, facere totam adipisci illum consequuntur
          incidunt et molestias at?
        </p>
      </div>
      <div className="container-fluid bg-color hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="profile-data-area">
                <div className="hero-data-area">

                  <h1 className="pc_title">
                    {" "}
                    Hi, I’m <span className="title-head">SK Ayub </span> <br />
                    <span className="title-head">Al Wahid</span>
                  </h1>

                  <h1 className="mobile_title">
                    {" "}
                    Hi, I’m <span className="title-head">SK Ayub </span> 
                    <span className="title-head">Al Wahid</span>
                  </h1>


                  <h5>
                    {phrases[currentPhraseIndex].substring(0, currentCharIndex)}
                  </h5>
                  <p>
                    Detail-oriented problem solver eager to drive success in{" "}
                    <br />
                    <span>forward-thinking organizations.</span>
                  </p>
                  <div className="hero-download-area">
                    <a
                      href="https://www.skayub.com/cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Download CV
                    </a>
                  </div>

                  <div className="icon-area">
                    <h4>find with me</h4>
                    <div className="sizeIcon">
                      <a
                        href="https://github.com/SKRJS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="icon-data-area"
                          icon={faGithub}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/skayubalwahid/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="icon-data-area"
                          icon={faLinkedin}
                        />
                      </a>
                      <a
                        href="https://scholar.google.com/citations?user=sD6iCGEAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="icon-data-area"
                          icon={faGoogleScholar}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 img-area ">
              <div className="">
                <img src={profile} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
