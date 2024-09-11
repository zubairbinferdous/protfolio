/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";

import comOne from '../assets/crrom1.png';
import profile from '../assets/profilePic.png';

const About = () => {
  return (
    <div>
      <div className=" service-area container-fluid">
        <div className="container">
          <div className="row">
            <div className="title-area text-center">
              <h3> About Me</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="profile-pic">
                <div className="pic-area">
                <img src={profile} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile">
                <p>
                I am a versatile Assistant Operations Manager, Project Manager, Administrator and Full Stack Developer with over 5 years of experience in optimizing operations, managing projects, and driving success. My 3-4 years of freelance work with startups have honed my ability to streamline processes, enhance productivity, and achieve strategic goals. I am passionate about problem-solving, collaboration, and delivering impactful results.
                </p>
              </div>
            </div>
          </div>

          <div className="row m-40">
            <div className="col-md-4 ">
              <div className="header-title">

              <h2>Experience</h2>
              <div className="experience">
                <div className="ex-area">
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="header-title">

              <h2>Education</h2>
              <div className="experience">
                <div className="ex-area">
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="header-title">

              <h2>Language</h2>
              <div className="experience">
                <div className="ex-area">
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Full Time Freelancing</h3>
                      <span>apr 2023 - present </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
           
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default About;
