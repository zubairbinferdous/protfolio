import React from 'react';
import '../App.css';
import profile from '../assets/profile.jpg';

const Hero = () => {
    return (
        <div>
            <div className="container-fluid bg-color hero-area">
               <div className="container">
               <div className="row">
                    <div className="col-md-7">
                      <div className="hero-data-area" id='home'>
                      <h1> Hi 👋 I am SK Ayub Al Wahid</h1>
                     <h3> Operations & Project Management Professional and Full Stack Developer</h3>
                    <p>Detail-oriented problem solver eager to drive success in forward-thinking organizations.</p>
                    <a href="../assets/Ayub.pdf" download={'Ayub.pdf'}>Download CV </a>

                      </div>
                    </div>
                    <div className="col-md-5 img-area ">
                            <div className="img-section">
                            <img src={profile} alt="" className='img-fluid'/>
                            </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Hero;