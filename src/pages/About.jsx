/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";
import comOne from '../assets/crrom1.png';
import js from '../assets/js.svg';
import laravel from '../assets/laravel-svgrepo-com.svg';
import prisma from '../assets/light-prisma-svgrepo-com.svg';
import mongo from '../assets/mongodb-svgrepo-com.svg';
import my from '../assets/mysql-logo-svgrepo-com.svg';
import node from '../assets/nodejs-logo-svgrepo-com.svg';
import posGet from '../assets/postgresql-svgrepo-com.svg';
import reactJs from '../assets/react.svg';
import redux from '../assets/redux-svgrepo-com.svg';

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
                <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile">
                <h2>Hi 👋 I am <span className="span-title">Olyve Schwarz</span></h2>
                <p>
                  A product designer with a knack for turning problems and
                  opportunities into user-driven strategic solutions. <br /> <br />
                  As a product designer, I specialize in creating unique visual
                  identities for digital products. I believe that a stunning
                  design starts with common values, open communication, and
                  respect for your audience.
                </p>
              </div>
            </div>
          </div>

          <div className="row m-40">
            <div className="col-md-6 ">
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
            <div className="col-md-6 ">
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
           
          </div>

          <div className="row  m-40">
           <h3 className="skill-title">Skills</h3>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={reactJs} alt="" />
             
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={js} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={node} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={redux} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={mongo} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={my} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={posGet} alt="" />
               
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={prisma} alt="" />
              
                <h3>React</h3>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={laravel} alt="" />
              
                <h3>React</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
