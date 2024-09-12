import React from 'react';
import '../App.css';

const Service = () => {
    return (
        <div>
          <div className="service-area mb-10">
          <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center">
                        <h3>  My Quality Services</h3>
                        <p>  From web applications to digital marketing, brand promotion, and eCommerce solutions, I provide everything you need to succeed in the digital world.</p>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-md-7 ">
                          <div className="service-data">
                            <span>01</span>
                            <h2>web applications</h2>
                            <p>I create cutting-edge, user-friendly web apps that are responsive and tailored to your company's requirements, providing a smooth functioning experience.</p>
                          </div>
                        </div>
                        <div className="col-md-5 ">
                        <div className="service-data">
                            <span>02</span>
                            <h2>digital marketing</h2>
                            <p>From SEO to social media, I offer comprehensive digital marketing services that increase visibility and grow your business.</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                        <div className="service-data">
                            <span>03</span>
                            <h2>brand promotion</h2>
                            <p>I help elevate your brand by creating impactful promotion strategies that resonate with your audience and build lasting recognition.</p>
                          </div>
                        </div>
                        <div className="col-md-7">
                        <div className="service-data">
                            <span>04</span>
                            <h2>eCommerce Solutions</h2>
                            <p>I provide customized eCommerce solutions that streamline your online sales process, enhance user experience, and drive business growth.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Service;