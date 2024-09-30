// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import "../App.css";
import profile from "../assets/borobhai.jpg";

const Hero = () => {
  return (
    <div>
      <div className="section"id='home'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta porro repellat et numquam quidem veritatis? Voluptatibus consectetur, repudiandae culpa assumenda, facere totam adipisci illum consequuntur incidunt et molestias at?</p>
      </div>
      <div className="container-fluid bg-color hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="profile-data-area">
              <div className="hero-data-area">
                <h1>
                  {" "}
                  Hi, I’m{" "}
                  <span className="title-head">SK Ayub </span> <br />
                  <span className="title-head">Al Wahid</span>
                </h1>
                <h5>
                  {" "}
                  A Operations & Project Management Professional and Full Stack
                  Developer
                </h5>
                <p>
                  Detail-oriented problem solver eager to drive success in
                  forward-thinking organizations.
                </p>
                <div className="hero-download-area">
                  <a href="./public/hello.pdf" download="Ayub.pdf"> Download CV</a>
                </div>

                <div className="icon-area">
                    <h4>find with me</h4>
                    <div className="sizeIcon">
                   <a href="https://github.com/SKRJS"> <FontAwesomeIcon className='icon-data-area' icon={faGithub} /></a>
                   <a href="https://www.linkedin.com/in/skayubalwahid/"> <FontAwesomeIcon className='icon-data-area' icon={faLinkedin}  /></a>
                   <a href="https://scholar.google.com/citations?user=sD6iCGEAAAAJ&hl=en"> <FontAwesomeIcon className='icon-data-area' icon={faGoogleScholar}  /></a>
                  
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
