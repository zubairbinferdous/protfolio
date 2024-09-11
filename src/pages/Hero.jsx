import React from 'react';
import '../App.css';
import profile from '../assets/profilePic.jpg';

const Hero = () => {
    return (
        <div>
            <div className="container-fluid bg-color hero-area">
               <div className="container">
               <div className="row">
                    <div className="col-md-7">
                      <div className="hero-data-area">
                      <h1>  I am SK Ayub Al Wahid </h1>
                     <h3>Web Developer +</h3>
                     <h3>UX Designer</h3>

                    <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <a href="">Download CV </a>

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