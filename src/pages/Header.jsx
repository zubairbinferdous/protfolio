import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

import '../App.css';
const Header = () => {


  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop - 70, // Adjust for navbar height
      behavior: 'smooth',
    });
    setIsNavCollapsed(true); // Collapse navbar after clicking
  };


  
  return (
    <div className="">
      
     {/* <div className="container-fluid">
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
     </div> */}
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#212428' }}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}> <img src={logo} alt="" /></a>
        <button 
          className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`} 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : 'collapse show'} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Publication" onClick={(e) => handleSmoothScroll(e, '#Publication')}>Publication</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project" onClick={(e) => handleSmoothScroll(e, '#Project')}>Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services" onClick={(e) => handleSmoothScroll(e, '#Services')}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonials" onClick={(e) => handleSmoothScroll(e, '#Testimonials')}>Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact" onClick={(e) => handleSmoothScroll(e, '#Contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </div>
  );
};

export default Header;
