import React, { useState } from 'react';

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
      
    
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#212428' }}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}> zubair</a>
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
            {/* <li className="nav-item">
              <a className="nav-link" href="#Publication" onClick={(e) => handleSmoothScroll(e, '#Publication')}>Publication</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#Services" onClick={(e) => handleSmoothScroll(e, '#Services')}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project" onClick={(e) => handleSmoothScroll(e, '#Project')}>Project</a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#Testimonials" onClick={(e) => handleSmoothScroll(e, '#Testimonials')}>Testimonials</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#Contact" onClick={(e) => handleSmoothScroll(e, '#Contact')}>Contact</a>
            </li>
            <li className="nav-item cv" >
              <a className="nav-link" href="https://drive.google.com/file/d/1DoC4bi3AgAsfymY0Y0go6K_2ieFj5_-A/view">Download Cv</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </div>
  );
};

export default Header;
