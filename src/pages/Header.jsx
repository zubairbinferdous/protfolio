import React from "react";
import '../App.css';
import logo from '../assets/logo.jpg';
const Header = () => {
  return (
    <div className="">
      
     <div className="container-fluid">
        <div className="row">
        <nav className="navbar navbar-expand-lg navBer fixed-top">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Publication">
                Publication

                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Project">
                  Project
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Services">
                Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Testimonials">
                Testimonials
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
        </div>
     </div>
    </div>
  );
};

export default Header;
