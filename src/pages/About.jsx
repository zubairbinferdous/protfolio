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
            <div className="title-area text-center" id="about">
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
                I am a versatile Assistant Operations Manager, Project Manager, Administrator and Full Stack Developer with over 5 years of experience in optimizing operations, managing projects, and Administration success. My 3-4 years of freelance work with startups have honed my ability to streamline processes, enhance productivity, and achieve strategic goals. I am passionate about problem-solving, collaboration, and delivering impactful results.
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
                      <h3>Unified (USG)</h3>
                      <h4>Assistant Operation Manager (Full-Time)
                      </h4>
                      <p>Los Angeles, California</p>
                      <span>September 2024 - Present</span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>STAR IT Ltd</h3>
                      <h4>Project Management Trainee – Intern</h4>
                      <p>California, USA</p>
                      <span>Nov 2023 – Apr 2024 </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Pushpodhara Properties Ltd</h3>
                      <h4>Administrative Manager</h4>
                      <p>Dhaka, Bangladesh </p>
                      <span>Jul 2022 – Mar 2023</span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Sino Atrium Electronic Ind. Ltd </h3>
                      <h4>Business Development Administrator</h4>
                      <p>Dhaka, Bangladesh </p>
                      <span>Jan 2020 – Jun 2021
                      </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Zasa LTD</h3>
                      <h4>System Administrator</h4>
                      <p>Dhaka, Bangladesh  </p>
                      <span>Jan 2018 – Dec 2019</span>
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
                      <h3>Master of Business Administration (MBA)</h3>
                      <p>Major: Management Information System (MIS)</p>
                      <h4>International American University – Los Angeles, California, USA</h4>
                      <span>May 2023 – Apr 2024
                      </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Bachelor of Science (BS) in Computer Science</h3>
                      <p>Thesis: “A classification and prediction-based approach for real-time ETP outlet monitoring through E-IoT and remote sensing using machine
                      learning and deep learning" </p>
                      <h4>BRAC University - Dhaka, Bangladesh</h4>
                      <span>May 2020
                      </span>
                    </div>
                  </div>

                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Higher Secondary School Certificate in Science</h3>
                      <p>Bir Sreshtho Munshi Abdur Rouf Public College - Dhaka, Bangladesh</p>
                      <span>2013 – 2014
                      </span>
                    </div>
                  </div>

                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Secondary School Certificate in Science</h3>
                      <p> Faizur Rahman Ideal Institute - Dhaka, Bangladesh</p>
                      <span>2002 – 2012
                      </span>
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
                      <h3>English</h3>
                      <span>fluent </span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Spanish</h3>
                      <span>fluent</span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>hindi</h3>
                      <span>fluent</span>
                    </div>
                  </div>
                  <div className="ex-section">
                    <img src={comOne} alt="" className="logo-icon"/>
                    <div className="ex-data">
                      <h3>Bangla</h3>
                      <span>fluent</span>
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
