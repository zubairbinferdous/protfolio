// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleScholar, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import "../App.css";
import profile from "../assets/borobhai.jpg";

const Hero = () => {
  return (
    <div>
      <div className="container-fluid bg-color hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="profile-data-area">
              <div className="hero-data-area" id="home">
                <h1>
                  {" "}
                  Hi  I am{" "}
                  <span className="title-head">SK Ayub Al Wahid</span>
                </h1>
                <h5>
                  {" "}
                  Operations & Project Management Professional and Full Stack
                  Developer
                </h5>
                <p>
                  Detail-oriented problem solver eager to drive success in
                  forward-thinking organizations.
                </p>
                <a href="../assets/Ayub.pdf" download={"Ayub.pdf"}>
                  Download CV{" "}
                </a>

                <div className="icon-area">
                    <h4>find with me</h4>
                    <div className="sizeIcon">
                    <FontAwesomeIcon className='icon-data-area' icon={faSquareFacebook} />
                    <FontAwesomeIcon className='icon-data-area' icon={faLinkedin}  />
                    <FontAwesomeIcon className='icon-data-area' icon={faGoogleScholar}   />
                    <FontAwesomeIcon className='icon-data-area' icon={faGithub}  />
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
